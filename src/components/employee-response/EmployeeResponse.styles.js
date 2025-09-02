import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
  overflow: hidden;
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: white;
  padding: 30px;
  text-align: center;

  h1 {
    margin: 0 0 10px 0;
    font-size: 28px;
    font-weight: 600;
  }

  p {
    margin: 0;
    opacity: 0.9;
    font-size: 16px;
  }
`;

export const Content = styled.div`
  padding: 30px;
`;

export const TicketInfo = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;

  h3 {
    margin: 0 0 16px 0;
    color: #1e293b;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;

  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;

    .label {
      font-weight: 500;
      color: #64748b;
    }

    .value {
      color: #1e293b;
      font-weight: 600;
    }
  }
`;

export const Description = styled.div`
  margin-top: 16px;

  .label {
    font-weight: 500;
    color: #64748b;
    margin-bottom: 8px;
  }

  .text {
    color: #374151;
    line-height: 1.6;
    padding: 12px;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-style: italic;
  }
`;

export const ResponseSection = styled.div`
  background: #f0f9ff;
  border: 2px solid #0284c7;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;

  h3 {
    margin: 0 0 20px 0;
    color: #0c4a6e;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ResponseContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #0284c7;
  margin-bottom: 16px;

  p {
    margin: 0;
    color: #374151;
    line-height: 1.6;
    font-size: 16px;
  }
`;

export const ResponseMeta = styled.div`
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  border-top: 1px solid #bae6fd;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }

    .icon {
      color: #0369a1;
    }

    .label {
      font-weight: 500;
      color: #0369a1;
    }

    .value {
      color: #0c4a6e;
    }
  }
`;

export const RatingSection = styled.div`
  background: #fefefe;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;

  h3 {
    margin: 0 0 20px 0;
    color: #1f2937;
    font-size: 18px;
    text-align: center;
  }

  .rating-description {
    text-align: center;
    color: #6b7280;
    margin-bottom: 24px;
    line-height: 1.6;
  }
`;

export const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;

  .star {
    background: none;
    border: none;
    font-size: 2rem;
    color: #dee2e6;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.1s ease;
    padding: 0.25rem;

    &.filled {
      color: #ffc107;
    }

    &:hover:not(.disabled) {
      color: #ffc107;
      transform: scale(1.1);
    }

    &:focus {
      outline: none;
    }

    &.disabled {
      cursor: default;
      
      &:hover {
        transform: none;
      }
    }

    &:disabled {
      cursor: default;
    }
  }
`;

export const RatingLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  font-size: 12px;
  color: #9ca3af;

  span {
    text-align: center;
    max-width: 60px;
  }
`;

export const CommentSection = styled.div`
  margin-top: 24px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    resize: vertical;
    font-family: inherit;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #0284c7;
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
    }

    &:disabled {
      background-color: #f9fafb;
      color: #9ca3af;
    }
  }

  .char-count {
    text-align: right;
    font-size: 12px;
    color: #9ca3af;
    margin-top: 4px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &.primary {
    background: #0284c7;
    color: white;

    &:hover:not(:disabled) {
      background: #0369a1;
      transform: translateY(-1px);
    }

    &:disabled {
      background: #9ca3af;
      cursor: not-allowed;
    }
  }

  &.secondary {
    background: #f8fafc;
    color: #64748b;
    border-color: #e2e8f0;

    &:hover:not(:disabled) {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const AlreadyRatedMessage = styled.div`
  text-align: center;
  padding: 20px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  color: #166534;

  .icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    opacity: 0.8;
  }
`;
