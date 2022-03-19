import { FC } from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import { NotificationBannerContainer } from './notification-banner.styled';

const NotificationBanner: FC = () => (
  <NotificationBannerContainer>
    <ToastContainer autoClose={2500} transition={Slide} />
  </NotificationBannerContainer>
);

export default NotificationBanner;
