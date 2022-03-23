import { FC } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationBanner: FC = () => (
  <>
    <ToastContainer autoClose={2500} transition={Slide} />
  </>
);

export default NotificationBanner;
