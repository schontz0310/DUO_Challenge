/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { Brightness, Invert } from 'react-native-color-matrix-image-filters';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input/Input';
import Buttom from '../../components/Button/Button';

import Logo from '../../assets/logo.png';

import { Container, LogoBox, Title } from './styles';

const Register: React.FC = () => {
  const formref = useRef<FormHandles>(null);

  const handleRegister = useCallback(data => {
    Alert.alert(
      'Cadastro Concluido',
      `Parabéns ${data.name}, você receberá nossas noticias no email ${data.email}`,
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      { cancelable: false },
    );
  }, []);

  return (
    <Container>
      <Invert>
        <Brightness amount={0}>
          <LogoBox source={Logo} />
        </Brightness>
      </Invert>
      <Title>Faça sua Inscrição</Title>

      <Form ref={formref} onSubmit={handleRegister}>
        <Input name="name" icon="user" placeholder="Nome" />
        <Input name="email" icon="mail" placeholder="Email" />
      </Form>
      <Buttom
        onPress={() => {
          formref.current?.submitForm();
        }}
      >
        Cadastrar
      </Buttom>
    </Container>
  );
};

export default Register;
