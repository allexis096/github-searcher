import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Container, Header, CardFollowing } from './styles';

const Following: React.FC = () => {
  return (
    <Container>
      <Header>
        <FaArrowLeft size={20} />
        <span>10 seguindo</span>
      </Header>
      <CardFollowing>
        <main>
          <div />
          <img src="https://github.com/allexis096.png" alt="profile" />
          <strong>#allexis096</strong>
          <FaArrowRight size={20} />
        </main>
      </CardFollowing>
    </Container>
  );
};

export default Following;
