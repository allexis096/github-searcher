import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  login: string;
  text: 'Sair' | 'Salvar';
  clickText: () => void;
  icon: React.ComponentType<IconBaseProps>;
  color: '#D03434' | '#5CBC29';
}

const Header: React.FC<HeaderProps> = ({
  login,
  text,
  clickText,
  icon: Icon,
  color,
}) => {
  return (
    <Container>
      <span>#{login}</span>
      <Link to="/" onClick={clickText}>
        <span>{text}</span>
        <Icon size={20} color={color} />
      </Link>
    </Container>
  );
};

export default Header;
