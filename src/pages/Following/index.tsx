import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container, Header, CardFollowing } from './styles';

interface FollowingProps {
  id: number;
  login: string;
  avatar_url: string;
}

const Following: React.FC = () => {
  const { user, setNewUser } = useUsers();
  const [following, setFollowing] = useState<FollowingProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/users/${user.login}/following`)
      .then(response => setFollowing(response.data));
  }, [history, user.login]);

  const handleClick = useCallback(
    (githubUser: string) => {
      setNewUser(githubUser);
    },
    [setNewUser],
  );

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FaArrowLeft size={20} />
        </Link>
        <span>{user.following} seguindo</span>
      </Header>
      {following.map(follow => (
        <CardFollowing key={follow.id}>
          <main>
            <div />
            <img src={follow.avatar_url} alt="profile" />
            <strong>#{follow.login}</strong>
            <Link to="/profile" onClick={() => handleClick(follow.login)}>
              <FaArrowRight size={20} />
            </Link>
          </main>
        </CardFollowing>
      ))}
    </Container>
  );
};

export default Following;
