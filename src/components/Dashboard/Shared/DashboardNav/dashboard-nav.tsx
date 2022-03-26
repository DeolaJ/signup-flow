import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { doLogoutUser } from '../../../../store/actions/user';
import InvertedPrimaryButton from '../../../Shared/Button/InvertedPrimaryButton';

import { DashboardNavContainer } from './dashboard-nav.styled';

const DashboardNav: FC = () => {
  const dispatch = useDispatch();

  return (
    <DashboardNavContainer>
      <InvertedPrimaryButton text="Logout" onClick={() => dispatch(doLogoutUser())} size="sm" />
    </DashboardNavContainer>
  );
};

export default DashboardNav;
