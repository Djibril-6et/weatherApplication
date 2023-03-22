import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Divider from '../Divider';

const Index = ({description, hour}) => {
  const [currentData, setCurrentData] = useState([]);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    setDesc(description);
    setCurrentData(hour);
  }, []);

  return (
    <CurrentAndDescription>
      <CurrentTemp>
        <CurrentView>
          <Current>Currently</Current>
        </CurrentView>
        <Divider
          width="90%"
          height="1px"
          marginSides="auto"
          marginTopBot="2px"
          color={props => props.theme.thirdColor}
        />
        <TempView>
          <Temp>{currentData.temp}°</Temp>
        </TempView>
      </CurrentTemp>
      <DescriptionView>
        <TodayView>
            <Today>Today</Today>
        </TodayView>
        <Divider
          width="90%"
          height="1px"
          marginSides="auto"
          marginTopBot="2px"
          color={props => props.theme.thirdColor}
        />
        <DescView>
            <Desc>{desc}</Desc>
        </DescView>
      </DescriptionView>
    </CurrentAndDescription>
  );
};

const CurrentAndDescription = styled.View`
  width: 90%;
  height: 130px;
  border-radius: 5px;
  margin: 0 auto 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CurrentTemp = styled.View`
  width: 27%;
  height: 100%;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryColorLight};
  display: flex;
  flex-direction: column;
`;

const CurrentView = styled.View`
  width: 90%;
  height: 20%;
  margin: 0 auto;
`;

const Current = styled.Text`
  margin: auto 0;
  color: #fff;
`;

const TempView = styled.View`
  height: 60%;
  margin: auto;
`;

const Temp = styled.Text`
  margin: auto;
  font-size: 30px;
`;

const DescriptionView = styled.View`
  width: 70%;
  height: 100%;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryColorLight};
  display: flex;
  flex-direction: column;
`;

const TodayView = styled.View`
  width: 90%;
  height: 20%;
  margin: 0 auto;
`;

const Today = styled.Text`
  margin: auto 0;
  color: #fff;
`;

const DescView = styled.View`
    height: 70%;
    width: 90%;
    margin: auto;
`;

const Desc = styled.Text`
    width: 100%;
    margin: auto 0;
    font-size: 17px;
    line-height: 20px;
`;

export default Index;
