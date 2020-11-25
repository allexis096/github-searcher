import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardFollow from '../../components/CardFollow';
import InfoHeader from '../../components/InfoHeader';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container } from './styles';

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
        <CardFollow
          key={follower.id}
          avatar={follower.avatar_url}
          login={follower.login}
          linkClick={() => handleClick(follower.login)}
        />
      ))}
    </Container>
  );
};

export default Followers;
