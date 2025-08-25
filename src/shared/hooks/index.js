import { useState, useEffect, useCallback } from 'react';

/**
 * Hook para manejar operaciones asíncronas
 * Simplifica el manejo de loading, error y data
 */
export const useAsync = (asyncFunction, immediate = true, dependencies = []) => {
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        setError(null);
        const result = await asyncFunction(...params);
        setData(result);
        return result;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    loading,
    error,
    data,
    execute,
    setData,
    clearError: () => setError(null)
  };
};

/**
 * Hook para manejar media queries responsive
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

/**
 * Hook para localStorage con soporte JSON
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};

/**
 * Hook para manejar formularios con validación
 */
export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedState] = useState({});

  const setValue = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error si existe
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const setError = (name, error) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const setTouched = (name, isTouched = true) => {
    setTouchedState(prev => ({ ...prev, [name]: isTouched }));
  };

  const validate = (fieldName) => {
    if (!validationRules[fieldName]) return true;

    const rule = validationRules[fieldName];
    const value = values[fieldName];
    let error = null;

    if (rule.required && (!value || value.toString().trim() === '')) {
      error = rule.required === true ? `${fieldName} es requerido` : rule.required;
    } else if (value && rule.pattern && !rule.pattern.test(value)) {
      error = rule.patternMessage || `${fieldName} no tiene el formato correcto`;
    } else if (value && rule.minLength && value.length < rule.minLength) {
      error = `${fieldName} debe tener al menos ${rule.minLength} caracteres`;
    } else if (value && rule.maxLength && value.length > rule.maxLength) {
      error = `${fieldName} no puede tener más de ${rule.maxLength} caracteres`;
    } else if (rule.custom && typeof rule.custom === 'function') {
      error = rule.custom(value, values);
    }

    if (error) {
      setError(fieldName, error);
      return false;
    } else {
      setError(fieldName, null);
      return true;
    }
  };

  const validateAll = () => {
    const fieldNames = Object.keys(validationRules);
    const results = fieldNames.map(validate);
    return results.every(Boolean);
  };

  const reset = (newValues = initialValues) => {
    setValues(newValues);
    setErrors({});
    setTouched({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(name, true);
    validate(name);
  };

  return {
    values,
    errors,
    touched,
    setValue,
    setError,
    setTouched,
    validate,
    validateAll,
    reset,
    handleChange,
    handleBlur,
    isValid: Object.keys(errors).every(key => !errors[key])
  };
};
