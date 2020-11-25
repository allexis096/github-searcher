import React, { useEffect, useState } from 'react';
import { FiLock, FiStar, FiUnlock } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import InfoHeader from '../../components/InfoHeader';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container, CardRepo, AdditionalInfo } from './styles';

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
    api
      .get(`/users/${user.login}/repos`)
      .then(response => setRepos(response.data));
  }, [history, user.login]);

  return (
    <Container>
      <InfoHeader text={`${user.public_repos} repositórios`} />
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
