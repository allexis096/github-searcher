import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface CardFollowProps {
  avatar: string;
  login: string;
  linkClick: () => void;
}

const CardFollow: React.FC<CardFollowProps> = ({
  avatar,
  login,
  linkClick,
}) => {
  return (
    <Container>
      <main>
        <div />
        <img src={avatar} alt="profile" />
        <strong>#{login}</strong>
        <Link to="/profile" onClick={linkClick}>
          <FaArrowRight size={20} />
        </Link>
      </main>
    </Container>
  );
};

export default CardFollow;
