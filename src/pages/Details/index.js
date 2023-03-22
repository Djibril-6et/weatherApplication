import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/Header';
import styled from 'styled-components';
import WeeklyForercast from '../../components/WeeklyForecast';
import HourlyForecast from '../../components/HourlyForecast';
import CurrentAndDesc from '../../components/CurrentTempAndDescription';

const Index = props => {
  const [headerTitle, setHeaderTitle] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setHeaderTitle(props.route.params.city.address);
  }, []);

  const getHour = () => {
    const currentDate = new Date();
    const currentHour = parseInt(currentDate.getHours());
    const hourForecasts = props.route.params.city.days[0].hours[currentHour];
    return hourForecasts;
  };

  return (
    <>
      <Header text={headerTitle} showFavIcon={true} />
      <ScrollView>
        {!error ? (
          <>
            <Wrapper>
              <CurrentAndDesc
                description={props.route.params.city.days[0].description}
                hour={getHour()}
              />
              <HourlyForecast day={props.route.params.city.days[0].hours} />
              <WeeklyForercast forecasts={props.route.params.city.days} />
            </Wrapper>
          </>
        ) : (
          <Text>No city Found.</Text>
        )}
      </ScrollView>
    </>
  );
};

const Wrapper = styled.View`
  width: 100%;
  margin: 10px 0;
`;

export default Index;
