import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext';

const GenrePage = () => {
  const { genre } = useParams();
  const { textSize } = useTheme();

  return (
    <Container textSize={textSize}>
      <h1>{genre} Movies</h1>
      <p>List of movies in the {genre} genre.</p>
      {/* Here you can add a list or grid of movies belonging to the selected genre */}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  font-size: ${({ textSize }) => textSize};
  padding: 20px;
`;

export default GenrePage;
