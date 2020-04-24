import React from 'react';
import { View, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import { Container, Title, ForgetPassword, ForgetPasswordText, CreateAccount, CreateAccountText } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça o seu logon</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => {}}>Entrar</Button>

            <ForgetPassword onPress={() => {}}>
              <ForgetPasswordText>Esqueci minha senha</ForgetPasswordText>
            </ForgetPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccount onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;
