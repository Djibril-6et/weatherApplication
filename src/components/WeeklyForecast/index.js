import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Divider from '../Divider';
import Calendar from '../../assets/others/calendar.png'

const Index = ({forecasts}) => {
  const [cityForecasts, setCityForecasts] = useState([]);

  useEffect(() => {
    setCityForecasts(forecasts);
  }, []);

  const convertDate = dateValue => {
    const monthsList = [
      {id: '01', month: 'Jan'},
      {id: '02', month: 'Feb'},
      {id: '03', month: 'Mar'},
      {id: '04', month: 'Apr'},
      {id: '05', month: 'May'},
      {id: '06', month: 'Jun'},
      {id: '07', month: 'Jul'},
      {id: '08', month: 'Aug'},
      {id: '09', month: 'Sep'},
      {id: '10', month: 'Oct'},
      {id: '11', month: 'Nov'},
      {id: '12', month: 'Dec'},
    ];

    const day = dateValue.substring(8, 10);
    const month = dateValue.substring(5, 7);
    var result = monthsList.find(item => item.id === month);
    const convertedMonth = result.month;

    return day + ' ' + convertedMonth;
  };

  return (
      <WeekWrapper>
        <WeekTitleWrapper>
          <CalendarIcon source={Calendar}/>
          <WeekTitle>15 days forecast</WeekTitle>
        </WeekTitleWrapper>
        <Divider
          height="1px"
          width="95%"
          marginSides="auto"
          marginTopBot="5px"
          color={props => props.theme.thirdColor}
        />
        <ScrollDays showsVerticalScrollIndicator={false}>
        {cityForecasts?.slice(0, 1).map(day => (
          <>
            <DataDayWrapper>
              <Datetime>Today</Datetime>
              <TempMinMax>
                <TempMinMaxWrapper>
                  <From>min : </From>
                  <TempMin>{day.tempmin}°</TempMin>
                </TempMinMaxWrapper>
                <TempMinMaxWrapper>
                  <To>max : </To>
                  <TempMax>{day.tempmax}°</TempMax>
                </TempMinMaxWrapper>
              </TempMinMax>
            </DataDayWrapper>
            <Divider
              height="1px"
              width="85%"
              marginSides="auto"
              marginTopBot="5px"
              color={props => props.theme.thirdColor}
            />
          </>
        ))}

        {cityForecasts?.slice(1, 2).map(day => (
          <>
            <DataDayWrapper>
              <Datetime>Tommorow</Datetime>
              <TempMinMax>
                <TempMinMaxWrapper>
                  <From>min : </From>
                  <TempMin>{day.tempmin}°</TempMin>
                </TempMinMaxWrapper>
                <TempMinMaxWrapper>
                  <To>max : </To>
                  <TempMax>{day.tempmax}°</TempMax>
                </TempMinMaxWrapper>
              </TempMinMax>
            </DataDayWrapper>
            <Divider
              height="1px"
              width="85%"
              marginSides="auto"
              marginTopBot="5px"
              color={props => props.theme.thirdColor}
            />
          </>
        ))}

        {cityForecasts?.slice(2, 14).map(day => (
          <>
            <DataDayWrapper>
              <Datetime>{convertDate(day.datetime)}.</Datetime>
              <TempMinMax>
                <TempMinMaxWrapper>
                  <From>min : </From>
                  <TempMin>{day.tempmin}°</TempMin>
                </TempMinMaxWrapper>
                <TempMinMaxWrapper>
                  <To>max : </To>
                  <TempMax>{day.tempmax}°</TempMax>
                </TempMinMaxWrapper>
              </TempMinMax>
            </DataDayWrapper>
            <Divider
              height="1px"
              width="85%"
              marginSides="auto"
              marginTopBot="5px"
              color={props => props.theme.thirdColor}
            />
          </>
        ))}
        {cityForecasts?.slice(14, 15).map(day => (
          <>
            <DataDayWrapper>
              <Datetime>{convertDate(day.datetime)}.</Datetime>
              <TempMinMax>
                <TempMinMaxWrapper>
                  <From>min : </From>
                  <TempMin>{day.tempmin}°</TempMin>
                </TempMinMaxWrapper>
                <TempMinMaxWrapper>
                  <To>max : </To>
                  <TempMax>{day.tempmax}°</TempMax>
                </TempMinMaxWrapper>
              </TempMinMax>
            </DataDayWrapper>
          </>
        ))}
        </ScrollDays>
      </WeekWrapper>
  );
};

const WeekWrapper = styled.View`
  width: 90%;
  height: 400px;
  border-radius: 5px;
  margin: auto;
  padding: 5px 0;
  background-color: ${props => props.theme.primaryColorLight};
`;

const WeekTitleWrapper = styled.View`
  width: 95%;
  height: 45px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CalendarIcon = styled.Image`
margin: auto 0;
  height: 25px;
  width: 25px;
`;

const WeekTitle = styled.Text`
  width: 91%;
  margin: auto 0;
  font-size: 16px;
  color: #fff;
`;

const ScrollDays = styled.ScrollView`
  width: 100%;
  margin: auto;
`;

const DataDayWrapper = styled.View`
  width: 85%;
  height: 45px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Datetime = styled.Text`
  margin: auto 0;
  width: 40%;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

const TempMinMax = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 55%;
`;

const TempMinMaxWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

const From = styled.Text`
  margin: auto 0;
  color: #fff;
`;

const TempMin = styled.Text`
  margin: auto 0;
  font-weight:500;
  font-size: 16px;
  color: #000;
`;

const To = styled.Text`
  margin: auto 0;
  color: #fff;
`;

const TempMax = styled.Text`
  margin: auto 0;
  font-weight: 500;
  font-size: 16px;
  color: #000;
`;

export default Index;
