import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { doLogoutUser } from '../../../../store/actions/user';
import BareButton from '../../../Shared/Button/BareButton';

import { DashboardNavContainer } from './dashboard-nav.styled';

const DashboardNav: FC = () => {
  const dispatch = useDispatch();

  return (
    <DashboardNavContainer>
      <BareButton text="Logout" onClick={() => dispatch(doLogoutUser())} />
    </DashboardNavContainer>
  );
};

export default DashboardNav;
