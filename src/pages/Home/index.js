import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import apiService from '../../services/api.service';
import {useNavigation} from '@react-navigation/native';
import getPng from '../../assets/icons';
import Divider from '../../components/Divider';
import worldMainCities from '../../Variables/WorldMainCitiesList'

const Index = () => {
  const [citiesWeatherData, setCitiesWeatherData] = useState([]);
  const [filteredCitiesWeather, setFilteredCitiesWeather] = useState([]);
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const mainCities = [
    'Paris',
    'Le Blanc-Mesnil',
    'Nanterre',
    'Marseille',
    'Lyon',
    'Strasbourg',
    'Bordeaux',
    'Montpellier',
    'Rennes',
    'Nancy',
    'Brest',
    'Angers',
  ];

  useEffect(() => {
    if (citiesWeatherData[0]) return;
    mainCities.map(city => {
      apiService
        .getCityWeather(city)
        .then(res => {
          const setKey = citiesWeatherData.length + 1;
          setCitiesWeatherData(oldArray => [
            ...oldArray,
            {key: setKey, city: res},
          ]);
        })
        .catch(err => console.log(err));
    });
  }, []);

  const goToDetails = e => {
    e.preventDefault();
    setFilteredCitiesWeather([]);
    const searchQuery = city;
    const filteredCities = worldMainCities.filter(city =>
      city.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    filteredCities.map(city => {
      apiService
        .getCityWeather(city)
        .then(res => {
          const setKey = filteredCitiesWeather.length + 1;
          setFilteredCitiesWeather(oldArray => [
            ...oldArray,
            {key: setKey, city: res},
          ]);
        })
        .catch(err => console.log(err));
    });
  };

  const returnDisplay = () => {
    if (!filteredCitiesWeather[0]) return 'flex';
    else return 'none';
  };

  const returnDisplayReset = () => {
    if (filteredCitiesWeather[0]) return 'flex';
    else return 'none';
  };

  const imageSource = icon => {
    return '../../assets/2nd Set - Color/' + icon + '.svg';
  };

  return (
    <>
      <Header text="Weather of the day" showFavIcon={false} />
      <Wrapper>
        <ResearchWrapper>
          <Research
            onSubmitEditing={e => goToDetails(e)}
            onChangeText={string => {
              setCity(string);
            }}
            placeholder="Search for a city"
            placeholderTextColor="grey"
            id="input-search"
          />
          <ResearchBtn onPress={e => goToDetails(e)}>
            <ResearchBtnText>Search</ResearchBtnText>
          </ResearchBtn>
        </ResearchWrapper>
        <ResetFilter
          onPress={e => {
            e.preventDefault();
            setFilteredCitiesWeather([]);
          }}
          display={returnDisplayReset}>
          <ResetFilterText>Reset filter</ResetFilterText>
        </ResetFilter>
        <Divider
          height="2px"
          width="80%"
          color="white"
          marginTopBot="10px"
          marginSides="auto"
        />
        <ScrollHome>
          {filteredCitiesWeather &&
            filteredCitiesWeather.map(city => (
              <FilteredToday
                onPress={() =>
                  navigation.navigate('CityDetails', {city: city.city})
                }
                key={city.id}>
                <CityTemp>
                  <CityWrapper>
                    <City>{city.city && city.city.address}</City>
                  </CityWrapper>
                  <IconWrapper>
                    <WeatherIcon source={getPng(city.city.days[0].icon)} />
                  </IconWrapper>
                  <Temp>{city.city && city.city.days[0].temp} °C</Temp>
                </CityTemp>
              </FilteredToday>
            ))}

          {citiesWeatherData &&
            citiesWeatherData.map(city => (
              <Today
                display={returnDisplay}
                onPress={() =>
                  navigation.navigate('CityDetails', {city: city.city})
                }
                key={city.id}>
                <CityTemp>
                  <CityWrapper>
                    <City>{city.city && city.city.address}</City>
                  </CityWrapper>
                  <IconWrapper>
                    <WeatherIcon source={getPng(city.city.days[0].icon)} />
                  </IconWrapper>
                  <Temp>{city.city && city.city.days[0].temp} °C</Temp>
                </CityTemp>
              </Today>
            ))}
        </ScrollHome>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.View`
  margin: 10px 0;
`;

const ScrollHome = styled.ScrollView`
  width: 100%;
`;

const Today = styled.TouchableOpacity`
  width: 90%;
  height: 100px;
  border-radius: 5px;
  margin: 10px auto;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 3px;
  display: ${props => props.display};
  background-color: ${props => props.theme.secondaryColor};
`;

const FilteredToday = styled.TouchableOpacity`
  width: 90%;
  height: 100px;
  border-radius: 5px;
  margin: 10px auto;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 3px;
  display: ${props => props.display};
  background-color: ${props => props.theme.secondaryColor};
`;

const CityTemp = styled.View`
  /* font-size: 15px; */
  height: 100%;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CityWrapper = styled.View`
  width: 40%;
  text-align: left;
  margin: auto 0;
`;

const City = styled.Text`
  width: 100%;
  font-size: 13px;
  text-transform: uppercase;
`;

const Temp = styled.Text`
  width: 20%;
  text-align: right;
  margin: auto 0;
  font-weight: 700;
  font-size: 16px;
`;

const IconWrapper = styled.View`
  width: 40%;
  height: 100%;
`;

const WeatherIcon = styled.Image`
  width: 70%;
  height: 80%;
  margin: 5px auto auto auto;
`;

const ResearchWrapper = styled.View`
  width: 90%;
  height: 40px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Research = styled.TextInput`
  width: 75%;
  height: 40px;
  border: 1px solid #000;
  padding-left: 5px;
  background-color: #fff;
  padding-left: 15px;
`;

const ResearchBtn = styled.TouchableOpacity`
  width: 20%;
  height: 40px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 3px;
  background-color: #fff;
`;

const ResearchBtnText = styled.Text`
  margin: auto;
`;

const ResetFilter = styled.TouchableOpacity`
  display: ${props => props.display};
  background-color: #fff;
  margin: 5px auto 10px;
  width: 90%;
  height: 40px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 3px;
  align-items: center;
`;

const ResetFilterText = styled.Text`
  height: 50%;
  margin: auto;
`;

export default Index;
