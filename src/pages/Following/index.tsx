import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import CardFollow from '../../components/CardFollow';
import InfoHeader from '../../components/InfoHeader';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container } from './styles';

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
      <InfoHeader text={`${user.following} seguindo`} />
      {following.map(follow => (
        <CardFollow
          key={follow.id}
          avatar={follow.avatar_url}
          login={follow.login}
          linkClick={() => handleClick(follow.login)}
        />
      ))}
    </Container>
  );
};

export default Following;
