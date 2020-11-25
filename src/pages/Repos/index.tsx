import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FiLock, FiStar, FiUnlock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container, Header, CardRepo, AdditionalInfo } from './styles';

interface ReposProps {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

const Repos: React.FC = () => {
  const { user } = useUsers();
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('GithubUser')) {
      history.push('/');
    }

    api
      .get(`/users/${user.login}/repos`)
      .then(response => setRepos(response.data));
  }, [history, user.login]);

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FaArrowLeft size={20} />
        </Link>
        <span>{user.public_repos} repositórios</span>
      </Header>
      {repos.map(repo => (
        <CardRepo key={repo.id}>
          <main>
            <div />
            <h1>{repo.name}</h1>
          </main>
          <p>{repo.description}</p>
          <AdditionalInfo>
            <div className="stars">
              <FiStar size={20} color="#FFCE00" />
              <span>{repo.stargazers_count}</span>
            </div>

            <div className="lock">
              <FiUnlock size={20} color="#63BF1F" />
              <FiLock size={20} color="#CC042A" />
            </div>
          </AdditionalInfo>
        </CardRepo>
      ))}
    </Container>
  );
};

export default Repos;
