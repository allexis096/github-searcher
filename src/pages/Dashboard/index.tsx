import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/users';
import Header from '../../components/Header';

import { Container, Info, InfoNumbers, Bio } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useUsers();

  return (
    <Container>
      <Header
        login={user.login}
        text="Sair"
        clickText={() => localStorage.removeItem('GithubUser')}
        icon={FiLogOut}
        color="#D03434"
      />
      {/* <Header>
        <span>#{user.login}</span>
        <Link to="/" onClick={() => localStorage.removeItem('GithubUser')}>
          <span>Sair</span>
          <FiLogOut color="#D03434" size={20} />
        </Link>
      </Header> */}
      <div>
        <img src={user.avatar_url} alt="profile" />
      </div>
      <Info>
        <main>
          <div />
          <h1>{user.name}</h1>
        </main>
        <span>{user.email}</span>
        <span>{user.location}</span>
      </Info>
      <InfoNumbers>
        <Link to="/followers">
          <h1>{user.followers}</h1>
          <strong>Seguidores</strong>
        </Link>

        <Link to="/following">
          <h1>{user.following}</h1>
          <strong>Seguindo</strong>
        </Link>

        <Link to="/repos">
          <h1>{user.public_repos}</h1>
          <strong>Repos</strong>
        </Link>
      </InfoNumbers>
      <Bio>
        <main>
          <div />
          <h1>Bio</h1>
        </main>
        <p>{user.bio}</p>
      </Bio>
    </Container>
  );
};

export default Dashboard;
