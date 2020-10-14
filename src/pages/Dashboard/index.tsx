import React from 'react';
import { Image, ScrollView } from 'react-native';

import { Brightness, Invert } from 'react-native-color-matrix-image-filters';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';

import {
  Container,
  Header,
  User,
  FilterContainer,
  TitleHeader,
  FoodsContainer,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <User>
          <Icon
            name="user"
            size={24}
            color="#fff"
            onPress={() => navigation.navigate('Favorites')}
          />
          <TitleHeader>Bem vindo Usuario</TitleHeader>
        </User>
        <Invert>
          <Brightness amount={0}>
            <Image source={Logo} style={{ height: 30, width: 60 }} />
          </Brightness>
        </Invert>
      </Header>
      <FilterContainer />
      <ScrollView>
        <FoodsContainer>
          <Image
            source={{
              uri: 'https://duo.studio/img/loader.gif',
            }}
            style={{ width: 200, height: 200 }}
          />
        </FoodsContainer>
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
