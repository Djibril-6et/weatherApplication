import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiService from '../../services/api.service';
import getPng from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import Trash from '../../assets/others/trash.png';

const Index = props => {
  const [favCitiesList, setFavCitiesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const getList = async () => {
      const storedList = await AsyncStorage.getItem('favoritesList');
      if (storedList) {
        if (favCitiesList[0]) return;
        JSON.parse(storedList).map(city => {
          apiService
            .getCityWeather(city.name)
            .then(res => {
              const setKey = favCitiesList.length + 1;
              setFavCitiesList(oldArray => [
                ...oldArray,
                {key: setKey, city: res},
              ]);
            })
            .catch(err => console.log(err));
        });
      }
      setIsLoading(false);
    };
    getList();
  }, []);

  useEffect(() => {
    const jsonValue = JSON.stringify(favCitiesList);
    AsyncStorage.setItem('favoritesList', jsonValue).then(() => {
      AsyncStorage.getItem('favoritesList')
        .then(value => {
          if (value !== null) {
          }
        })
        .catch(err => console.log(err));
    });
    setIsLoading(false);
  }, [favCitiesList]);

  const deleteFavCity = (e, city) => {
    setIsLoading(true);
    e.preventDefault();
    const index = favCitiesList.indexOf(city);
    favCitiesList.splice(index, 1);
    setFavCitiesList([...favCitiesList]);
  };

  const returnIsEmpty = list => {
    return list.length === 0 ? true : false;
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Header text="My favorites" showFavIcon={false} />
      {returnIsEmpty(favCitiesList) ? (
        <NoFavs>You have not added any favorites.</NoFavs>
      ) : (
        <Scroll>
          {favCitiesList &&
            favCitiesList.map(city => (
              <>
                <WeatherAndBtn>
                  <Today
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
                  <DeleteBtn onPress={e => deleteFavCity(e, city)}>
                    <DeleteLabel source={Trash} />
                  </DeleteBtn>
                </WeatherAndBtn>
              </>
            ))}
        </Scroll>
      )}
    </>
  );
};

const NoFavs = styled.Text`
  margin: auto;
  font-size: 16px;
`;

const Scroll = styled.ScrollView`
  margin-top: 10px;
`;

const WeatherAndBtn = styled.View`
  width: 90%;
  margin: 10px auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Today = styled.TouchableOpacity`
  width: 80%;
  height: 100%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 3px;
  background-color: ${props => props.theme.secondaryColor};
`;

const CityTemp = styled.View`
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
  margin: auto;
`;

const City = styled.Text`
  width: 100%;
  font-size: 13px;
  text-transform: uppercase;
`;

const Temp = styled.Text`
  width: 20%;
  text-align: right;
  margin: auto;
  font-weight: 700;
  font-size: 14px;
`;

const IconWrapper = styled.View`
  width: 40%;
  height: 100%;
`;

const WeatherIcon = styled.Image`
  width: 70%;
  height: 70%;
  margin: auto;
`;

const DeleteBtn = styled.TouchableOpacity`
  width: 17%;
  height: 100%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 3px;
  background-color: ${props => props.theme.secondaryColor};
`;

const DeleteLabel = styled.Image`
  margin: auto;
  width: 30px;
  height: 30px;
`;

export default Index;
