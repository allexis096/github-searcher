import React, { useCallback, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { useUsers } from '../../hooks/users';
import api from '../../services/api';

import { Container, Info, InfoNumbers, Bio } from './styles';

const Profile: React.FC = () => {
  const { profile, newUser, setProfile, setUser } = useUsers();
  const history = useHistory();

  useEffect(() => {
    api.get(`users/${newUser}`).then(response => setProfile(response.data));
  }, [history, newUser, setProfile]);

  const handleSave = useCallback(async () => {
    localStorage.removeItem('GithubUpdatedUser');
    localStorage.removeItem('GithubUser');

    const response = await api.get(`users/${newUser}`);

    localStorage.setItem('GithubUser', JSON.stringify(response.data));

    setUser(response.data);

    history.push('/dashboard');
  }, [newUser, setUser, history]);

  return (
    <Container>
      <Header
        login={profile.login}
        text="Salvar"
        clickText={handleSave}
        icon={FiLogIn}
        color="#5CBC29"
      />
      <div>
        <img src={profile.avatar_url} alt="profile" />
      </div>
      <Info>
        <main>
          <div />
          <h1>{profile.name}</h1>
        </main>
        <span>{profile.email}</span>
        <span>{profile.location}</span>
      </Info>
      <InfoNumbers>
        <Link to="/followers">
          <h1>{profile.followers}</h1>
          <strong>Seguidores</strong>
        </Link>

        <Link to="/following">
          <h1>{profile.following}</h1>
          <strong>Seguindo</strong>
        </Link>

        <Link to="/repos">
          <h1>{profile.public_repos}</h1>
          <strong>Repos</strong>
        </Link>
      </InfoNumbers>
      <Bio>
        <main>
          <div />
          <h1>Bio</h1>
        </main>
        <p>{profile.bio}</p>
      </Bio>
    </Container>
  );
};

export default Profile;
