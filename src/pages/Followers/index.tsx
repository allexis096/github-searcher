import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import InfoHeader from '../../components/InfoHeader';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container, CardFollower } from './styles';

interface FollowerProps {
  id: number;
  login: string;
  avatar_url: string;
}

const Followers: React.FC = () => {
  const { user, setNewUser } = useUsers();
  const [followers, setFollowers] = useState<FollowerProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/users/${user.login}/followers`)
      .then(response => setFollowers(response.data));
  }, [history, user.login]);

  const handleClick = useCallback(
    (githubUser: string) => {
      setNewUser(githubUser);
    },
    [setNewUser],
  );

  return (
    <Container>
      <InfoHeader text={`${user.followers} seguidores`} />
      {followers.map(follower => (
        <CardFollower key={follower.id}>
          <main>
            <div />
            <img src={follower.avatar_url} alt="profile" />
            <strong>#{follower.login}</strong>
            <Link to="/profile" onClick={() => handleClick(follower.login)}>
              <FaArrowRight size={20} />
            </Link>
          </main>
        </CardFollower>
      ))}
    </Container>
  );
};

export default Followers;
