import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface InfoHeaderProps {
  text: string;
}

const InfoHeader: React.FC<InfoHeaderProps> = ({ text }) => {
  return (
    <Container>
      <Link to="/dashboard">
        <FaArrowLeft size={20} />
      </Link>
      <span>{text}</span>
    </Container>
  );
};

export default InfoHeader;
