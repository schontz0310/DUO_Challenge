import React from 'react';
// import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

// import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  BackgroundImage,
  Title,
  NavigationButton,
  ButtonText,
  IconContainer,
} from './styles';

// import Background from '../../assets/home-background.png';
// import Logo from '../../assets/logo.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  async function handleNavigate(): Promise<void> {
    navigation.navigate('MainBottom', {
      screen: 'Dashboard',
    });
  }

  return (
    <>
      <Container>
        <Title>Uma verdadeira experiência Italiana.</Title>
      </Container>
      <NavigationButton onPress={() => handleNavigate()}>
        <ButtonText>Entrar no Restaurant</ButtonText>
        <IconContainer />
      </NavigationButton>
    </>
  );
};

export default Home;
