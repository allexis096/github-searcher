import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { Container, Header, Info, InfoNumbers, Bio } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <span>#allexis096</span>
        <a href="/">
          <span>Sair</span>
          <FiLogOut color="#D03434" />
        </a>
      </Header>
      <div>
        <img src="https://github.com/allexis096.png" alt="profile" />
      </div>
      <Info>
        <main>
          <div />
          <h1>Allexis Figueiredo</h1>
        </main>
        <span>allexis@gmail.com</span>
        <span>Saquarema - RJ</span>
      </Info>
      <InfoNumbers>
        <div>
          <h1>32</h1>
          <strong>Seguidores</strong>
        </div>

        <div>
          <h1>32</h1>
          <strong>Seguindo</strong>
        </div>

        <div>
          <h1>10</h1>
          <strong>Repos</strong>
        </div>
      </InfoNumbers>
      <Bio>
        <main>
          <div />
          <h1>Bio</h1>
        </main>
        <p>
          An instructor focused on helping people start programming for web -
          #html #css #javascript #sql #react #nodejs #fullstack
        </p>
      </Bio>
    </Container>
  );
};

export default Dashboard;
