import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ password, email }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="Type password"
      />
      <input
        type="text"
        name="email"
        onChange={e => setEmail(e.target.value)}
        placeholder="Type email"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
