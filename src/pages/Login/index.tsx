import React, { FormEvent, useCallback, useState } from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

import { Container, Form } from './styles';

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!user) {
        setError('Campo obrigatório');
      }
    },
    [user],
  );

  return (
    <Container>
      <FaGithub size={80} color="#FFCE00" />

      <Form Error={!!error} onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        {error && <span>{error}</span>}
        <button type="submit">
          ENTRAR
          <FaArrowRight />
        </button>
      </Form>
    </Container>
  );
};

export default Login;
