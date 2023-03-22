import React from 'react';
import styled from 'styled-components';

const Index = ({height, width, color, marginSides, marginTopBot }) => {
  return (
    <Divider height={height} width={width} color={color} marginTopBot={marginTopBot} marginSides={marginSides}/>
  );
};

const Divider = styled.View`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.color};
  margin: ${props => props.marginTopBot} ${props => props.marginSides};
`;

export default Index;
