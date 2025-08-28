import styled from "styled-components";

// Modal base
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }
`;

// Header
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;

  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.2rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
    background: #f8f9fa;
  }
`;

export const PriorityBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;

  background: ${(props) => {
    switch (props.$priority?.toLowerCase()) {
      case "alta":
        return "#E06363";
      case "media":
        return "#E0C563";
      case "baja":
        return "#636EE0";
      default:
        return "#6c757d";
    }
  }};
`;

// Body
export const ModalBody = styled.div`
  padding: 1.5rem;

  p {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--color-primary);
  }
`;

// Content
export const EmployeeInfo = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`;

export const EmployeeName = styled.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`;

export const DateContainer = styled.p`
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

export const DateLabel = styled.span`
  font-weight: 600;
`;

export const DateValue = styled.span`
  color: #495057;
`;

export const RequestTitle = styled.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`;

export const DescriptionSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const DescriptionText = styled.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
  white-space: pre-wrap;
`;

// Delegation
export const DelegationInfo = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`;

export const DelegationText = styled.p`
  margin: 0;
  color: #1565c0;
  font-size: 0.85rem;
`;

// Assignment Info Components
export const AssignmentInfo = styled.div`
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid var(--color-accent);
`;

export const AssignmentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const AssignmentLabel = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
`;

export const AssignmentValue = styled.span`
  color: #495057;
  font-size: 0.85rem;
`;

// Actions
export const ActionButtonsRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${(props) => (props.$active ? "var(--color-accent)" : "#dee2e6")};
  background: ${(props) => (props.$active ? "var(--color-accent)" : "white")};
  color: ${(props) => (props.$active ? "white" : "var(--color-primary)")};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  flex: 1;
  font-size: 0.9rem;

  &:hover {
    border-color: var(--color-accent);
    background: ${(props) => (props.$active ? "#e54a2e" : "#fff5f5")};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
  }
`;

// Response section
export const ResponseSection = styled.div`
  margin-top: 1rem;
`;

export const ResponseLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

export const ResponseTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
  min-height: 120px;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(245, 101, 101, 0.1);
  }

  &::placeholder {
    color: #6c757d;
    font-style: italic;
  }
`;

// Delegate section
export const DelegateSection = styled.div`
  margin-top: 1rem;
`;

export const DelegateLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

export const UserSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  background: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(245, 101, 101, 0.1);
  }
`;

// Response view (modo "response")
export const ResponseViewSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const ResponseInfo = styled.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`;

export const ResponseViewTitle = styled.h5`
  margin: 0 0 0.75rem 0;
  color: var(--color-primary);
  font-weight: 600;
`;

export const ResponseText = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const AttentionInfo = styled.div`
  margin-top: 0.5rem;
  padding: 0;
  background: none;
  border: none;
  font-size: 0.75rem;
  opacity: 0.85;
`;

export const AttentionInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const AttentionInfoLabel = styled.span`
  font-weight: 500;
  color: #6c757d;
  font-size: 0.7rem;
`;

export const AttentionInfoValue = styled.span`
  color: #495057;
  font-size: 0.7rem;
  font-weight: 400;
`;

// Rating Components
export const RatingSection = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`;

export const RatingTitle = styled.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${props => props.$filled ? '#ffc107' : '#dee2e6'};
  cursor: pointer;
  transition: color 0.2s ease, transform 0.1s ease;
  padding: 0.25rem;

  &:hover {
    color: #ffc107;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

export const CommentSection = styled.div`
  text-align: left;
`;

export const CommentLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
    font-style: italic;
  }
`;

// Footer
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
  background: #f8f9fa;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0.75rem;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
