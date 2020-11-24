import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Container, Header, CardFollower } from './styles';

const Followers: React.FC = () => {
  return (
    <Container>
      <Header>
        <FaArrowLeft size={20} />
        <span>10 seguidores</span>
      </Header>
      <CardFollower>
        <main>
          <div />
          <img src="https://github.com/allexis096.png" alt="profile" />
          <strong>#allexis096</strong>
          <FaArrowRight size={20} />
        </main>
      </CardFollower>
    </Container>
  );
};

export default Followers;
