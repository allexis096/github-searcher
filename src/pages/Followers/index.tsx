import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container, Header, CardFollower } from './styles';

interface GitUserProps {
  id: number;
  login: string;
  avatar_url: string;
}

const Followers: React.FC = () => {
  const { user } = useUsers();
  const [followers, setFollowers] = useState<GitUserProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('GithubUser')) {
      history.push('/');
    }

    api
      .get(`/users/${user.login}/followers`)
      .then(response => setFollowers(response.data));
  }, [history, user.login]);

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FaArrowLeft size={20} />
        </Link>
        <span>10 seguidores</span>
      </Header>
      {followers.map(follower => (
        <CardFollower key={follower.id}>
          <main>
            <div />
            <img src={follower.avatar_url} alt="profile" />
            <strong>#{follower.login}</strong>
            <a
              href={`https://github.com/${follower.login}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaArrowRight size={20} />
            </a>
          </main>
        </CardFollower>
      ))}
    </Container>
  );
};

export default Followers;
