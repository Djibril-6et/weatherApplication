import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FavIconWhite from '../../assets/others/favorite-white.png';
import FavIconGold from '../../assets/others/favorite-gold.png';
import Favorites from '../../assets/others/favorites.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Index = ({text, showFavIcon}) => {
  const [favList, setFavList] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('favoritesList')
      .then(value => {
        if (value) setFavList(JSON.parse(value));
        else setFavList([]);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const jsonValue = JSON.stringify(favList);
    AsyncStorage.setItem('favoritesList', jsonValue).then(() => {
      AsyncStorage.getItem('favoritesList')
        .then(value => {
          if (value !== null) {
          }
        })
        .catch(err => console.log(err));
    });
  }, [favList]);

  const addToFavorites = (e, city) => {
    e.preventDefault();
    const setKey = favList.length + 1;
    const isFav = favList.find(element => element.name === city);
    if (isFav)
      Alert.alert(city, ' is already in your favorites', [{text: 'Close'}, {text: 'My favorites', onPress: () => navigation.navigate('Favorites', { favorites: returnFavList() })},]);
    else {
      setFavList(oldArray => [...oldArray, {key: setKey, name: city}]);
    }
  };

  const getFavIcon = city => {
    const isFav = favList.find(element => element.name === city);
    return isFav ? FavIconGold : FavIconWhite;
  };

  const returnFavList = () => {
    const value = JSON.stringify(AsyncStorage.getItem('favoritesList'));
    return value
  }

  return (
    <Background>
      {showFavIcon ? (
        <>
          <Title>{text}</Title>
          <FavBtn onPress={e => addToFavorites(e, text)}>
            <FavIcon source={getFavIcon(text)} />
          </FavBtn>
        </>
      ) : (
        <>
          <Title>{text}</Title>
          <FavsBtn onPress={() => navigation.navigate('Favorites', { favorites: returnFavList() })}>
            <FavIcon source={Favorites} />
          </FavsBtn>
        </>
      )}
    </Background>
  );
};

const Background = styled.View`
  width: 100%;
  height: 120px;
  padding-bottom: 15px;
  background-color: ${props => props.theme.primaryColor};
`;

const Title = styled.Text`
  text-align: center;
  height: 40%;
  margin-top: auto;
  font-size: 30px;
  color: ${props => props.theme.secondaryColor};
`;

const FavsBtn = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  position: absolute;
  right: 5px;
  top: 65px;
`;

const FavBtn = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 10px;
  top: 65px;
`;

const FavIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export default Index;
