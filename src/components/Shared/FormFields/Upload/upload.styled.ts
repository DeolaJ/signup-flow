import styled from 'styled-components';

export const UploadLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--color-input-black);
  display: block;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;

export const UploadWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 1rem;
  }

  &.error {
    border-color: var(--color-red);
  }

  .upload-button {
    width: auto;
    padding: 0;
    font-size: 0.75rem;
  }

  .file-upload-input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export const UploadPlaceholder = styled.div`
  display: flex;
  border: 1px solid var(--color-placeholder-grey);
  border-radius: 5px;
  height: 8.25rem;
  width: 10.25rem;
  position: relative;

  svg {
    margin: auto;
    margin-top: 1.5rem;
  }

  p {
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const UploadedPreviewTitle = styled.p`
  font-size: 0.75rem;
  color: var(--color-black);
  margin: 0;
`;

export const UploadError = styled.p`
  color: var(--color-red);
  font-size: 1rem;
  line-height: 1.125rem;
  margin-top: 0.5rem;
`;
