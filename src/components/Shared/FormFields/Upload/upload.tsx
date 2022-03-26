import { ChangeEvent, FC, useState, useEffect } from 'react';
import { useFormikContext } from 'formik';

import {
  UploadLabel,
  UploadedPreviewTitle,
  UploadWrapper,
  UploadError,
  UploadPlaceholder,
} from './upload.styled';
import BareButton from '../../Button/BareButton';

type UploadProps = {
  label: string;
  name: string;
  value: string;
  error: boolean;
  errorMessage?: string;
};

const Upload: FC<UploadProps> = ({ label, name, value, error, errorMessage }) => {
  const [state, setState] = useState<{
    isUploading: boolean;
    localError: string;
    uploadedFile: string;
    filename: string;
  }>({
    isUploading: false,
    localError: '',
    uploadedFile: value,
    filename: '',
  });
  const { setFieldValue } = useFormikContext();

  const resetUploadWrapper = () =>
    setState((prevState) => ({ ...prevState, localError: '', uploadedFile: '', filename: '' }));

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    resetUploadWrapper();
    const file = event.target.files?.[0];
    if (!file) {
      setState((prevState) => ({ ...prevState, localError: 'Please upload a file' }));
      return;
    }
    if (file) {
      if (file.size > 1024 * 1024 * 2) {
        return setState((prevState) => ({
          ...prevState,
          localError: 'Please upload a file less than 2MB in size',
        }));
      }
      setState((prevState) => ({ ...prevState, isUploading: true }));
      try {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = () => {
          setState((prevState) => ({
            ...prevState,
            isUploading: false,
            uploadedFile: String(reader.result),
            filename: file.name,
          }));
        };
      } catch (e) {
        setState((prevState) => ({
          ...prevState,
          isUploading: false,
          uploadedFile: value,
          localError: 'An error occurred while processing file',
        }));
      }
    }
  };

  useEffect(() => {
    if (state.uploadedFile) {
      setFieldValue(name, state.uploadedFile);
    }
  }, [state.uploadedFile, setFieldValue, name]);

  useEffect(() => {
    if (!value) {
      resetUploadWrapper();
    }
  }, [value]);

  return (
    <>
      {label && <UploadLabel htmlFor={name}>{label}</UploadLabel>}

      <UploadWrapper className={error || state.localError ? 'error' : ''}>
        {state.uploadedFile ? (
          <>
            <UploadedPreviewTitle>{state.filename || 'Untitled File...'}</UploadedPreviewTitle>
            <BareButton
              text="Clear file"
              onClick={() => resetUploadWrapper()}
              color="var(--color-red)"
            />
          </>
        ) : (
          <>
            <BareButton
              className="upload-button"
              text={
                <>
                  <span className="sr-only">Upload File (.md, .txt)</span>
                  <UploadPlaceholder>
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M49.9996 31.7559V35.2147C49.9996 35.7887 49.9745 36.3677 49.9244 36.9416C49.223 44.8393 43.737 50 35.8212 50H14.1779C10.1699 50 6.78814 48.6992 4.35828 46.3407C3.40637 45.4659 2.60477 44.4383 1.97852 43.2603C2.80517 42.2552 3.73202 41.1549 4.63383 40.0521C6.16188 38.2224 7.63984 36.4153 8.56669 35.2398C9.94445 33.5354 13.5767 29.049 18.6118 31.1544C19.6388 31.5804 20.5406 32.182 21.3673 32.7083C23.3964 34.0618 24.2481 34.4628 25.6759 33.6858C27.2541 32.8336 28.2811 31.1544 29.3583 29.3999C29.9344 28.47 30.5106 27.5702 31.1368 26.7431C33.8673 23.184 38.0757 22.2316 41.5827 24.3369C43.3362 25.3896 44.8392 26.718 46.242 28.069C46.5426 28.3697 46.8432 28.648 47.1188 28.9237C47.4945 29.2996 48.7471 30.5528 49.9996 31.7559Z"
                        fill="#696871"
                      />
                      <path
                        opacity="0.4"
                        d="M35.8467 0H14.1784C5.68637 0 0 5.94018 0 14.7853V35.215C0 38.2953 0.701403 41.0298 1.97896 43.2605C2.80561 42.2555 3.73247 41.1552 4.63427 40.0498C6.16232 38.2227 7.64028 36.4155 8.56713 35.24C9.94489 33.5357 13.5772 29.0492 18.6122 31.1546C19.6393 31.5807 20.5411 32.1822 21.3677 32.7086C23.3968 34.062 24.2485 34.4631 25.6764 33.6836C27.2545 32.8339 28.2816 31.1546 29.3587 29.3976C29.9349 28.4702 30.511 27.5704 31.1373 26.7433C33.8677 23.1842 38.0762 22.2318 41.5832 24.3372C43.3367 25.3899 44.8397 26.7183 46.2425 28.0692C46.5431 28.37 46.8437 28.6482 47.1192 28.9239C47.495 29.2974 48.7475 30.5506 50 31.7561V14.7853C50 5.94018 44.3136 0 35.8467 0Z"
                        fill="#696871"
                      />
                      <path
                        d="M23.6362 16.9917C23.6362 20.5132 20.7029 23.4457 17.1833 23.4457C13.6663 23.4457 10.7329 20.5132 10.7329 16.9917C10.7329 13.4727 13.6663 10.5377 17.1833 10.5377C20.7029 10.5377 23.6362 13.4727 23.6362 16.9917Z"
                        fill="#696871"
                      />
                    </svg>
                    <p>Choose file</p>
                  </UploadPlaceholder>
                </>
              }
            />
            <input
              type="file"
              id={name}
              name={name}
              onChange={handleUpload}
              className="file-upload-input"
              accept=".txt,.md"
            />
          </>
        )}
      </UploadWrapper>

      {(errorMessage || state.localError) && (
        <UploadError>{errorMessage || state.localError}</UploadError>
      )}
    </>
  );
};

export default Upload;
