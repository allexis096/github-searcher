import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FiLock, FiStar, FiUnlock } from 'react-icons/fi';

import { Container, Header, CardRepo, AdditionalInfo } from './styles';

const Repos: React.FC = () => {
  return (
    <Container>
      <Header>
        <FaArrowLeft size={20} />
        <span>10 repositórios</span>
      </Header>
      <CardRepo>
        <main>
          <div />
          <h1>Bio</h1>
        </main>
        <p>
          An instructor focused on helping people start programming for web -
          #html #css #javascript #sql #react #nodejs #fullstack
        </p>
        <AdditionalInfo>
          <div className="stars">
            <FiStar size={20} color="#FFCE00" />
            <span>32</span>
          </div>

          <div className="lock">
            <FiUnlock size={20} color="#63BF1F" />
            <FiLock size={20} color="#CC042A" />
          </div>
        </AdditionalInfo>
      </CardRepo>
    </Container>
  );
};

export default Repos;
