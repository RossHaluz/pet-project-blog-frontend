import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="login">Loin</NavLink>
      <NavLink to="register">Register</NavLink>
    </nav>
  );
};
export default AuthNav;
