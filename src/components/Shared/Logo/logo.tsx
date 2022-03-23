import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer } from './logo.styled';
import logo from '../../../assets/img/logo.png';

const Logo: FC = () => {
  return (
    <LogoContainer className="logo">
      <Link to="/">
        <img src={logo} alt="Talentdrop logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
