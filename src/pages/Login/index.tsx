import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container, Form } from './styles';

const Login: React.FC = () => {
  const { setUser } = useUsers();
  const history = useHistory();
  const [gitUser, setGitUser] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('GithubUser')) {
      history.push('/dashboard');
    }
  }, [history]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!gitUser) {
        setError('Campo obrigatório');
        return;
      }

      const response = await api.get(`users/${gitUser}`);
      try {
        setUser(response.data);

        localStorage.setItem('GithubUser', JSON.stringify(response.data));

        history.push('/dashboard');
      } catch (err) {
        setError('Erro ao buscar usuário');
      }
    },
    [gitUser, setUser, history],
  );

  return (
    <Container>
      <FaGithub size={80} color="#FFCE00" />

      <Form Error={!!error} onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          value={gitUser}
          onChange={e => setGitUser(e.target.value)}
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
