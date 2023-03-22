import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Divider from '../Divider';
import getMiniPng from '../../assets/mini-icons';
import Clock from '../../assets/others/clock.png'

const Index = ({day}) => {
  const [hourlyForecasts, setHourlyForecasts] = useState([]);

  useEffect(() => {
    setHourlyForecasts(day);
  }, []);

  return (
    <HourWrapper>
      <HourTitleWrapper>
        <ClockIcon source={Clock}/>
        <HourTitle>Forecast by hour</HourTitle>
      </HourTitleWrapper>
      <Divider
        height="1px"
        width="95%"
        marginSides="auto"
        marginTopBot="5px"
        color={props => props.theme.thirdColor}
      />
      <Forecasts horizontal={true} showsHorizontalScrollIndicator={false}>
        {hourlyForecasts?.map((hour) => (
            <Hour>
                <HourTextWrapper><HourText>{hour.datetime.substring(0,2)} h</HourText></HourTextWrapper>
                <IconView><Icon source={getMiniPng(hour.icon)}/></IconView>
                <Temp><TempText>{hour.temp}°</TempText></Temp>
            </Hour>
        ))}
      </Forecasts>
    </HourWrapper>
  );
};

const HourWrapper = styled.View`
  width: 90%;
  border-radius: 5px;
  margin: 0 auto 10px auto;
  padding: 5px 0;
  background-color: ${props => props.theme.primaryColorLight};
`;

const HourTitleWrapper = styled.View`
  width: 95%;
  height: 25px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ClockIcon = styled.Image`
    width: 5.5%;
    height: 70%;
    margin: auto 0;
`;

const HourTitle = styled.Text`
  width: 93%;
  margin: auto 0;
  font-size: 16px;
  color: #fff;
`;

const Forecasts = styled.ScrollView`
  margin: auto;
  width: 95%;
  height: 100px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const Hour = styled.View`
  width: 50px;
  height: 95%;
  margin: auto 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HourTextWrapper = styled.View`
    width: 100%;
    height: 20%;
`;

const HourText = styled.Text`
    margin: auto;
`;

const IconView = styled.View`
    width: 100%;
    height: 50%;
`;

const Icon = styled.Image`
    margin: auto;
    width: 100%;
    height: 100%;
`;

const Temp = styled.View`
    width: 100%;
    height: 20%;
`;

const TempText = styled.Text`
    margin: auto;
`;

export default Index;
