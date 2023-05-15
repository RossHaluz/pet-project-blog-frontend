import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(register({ fullName, email, password }));
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="fullName"
        placeholder="Type name"
        onChange={e => setFullName(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="Type email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Type password"
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
