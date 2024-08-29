import React, { useState } from "react";
import {
  ArrowRight,
  Container,
  ContainerLogin,
  CreateAccountButton,
  CreateAccountText,
  ImageLogin,
  LoginButton,
  Title,
  TitleButton,
} from "./styles";
import TextInput from "../components/text-input";
import { KeyboardAvoidingView, Platform, Text } from "react-native";
import { router } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleLogin = () => {
    router.replace("/home");
  };
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        style={{ paddingBottom: 30 }}
      >
        <ImageLogin />
        <ContainerLogin>
          <Title>Faça seu login</Title>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(value: string) => setEmail(value)}
          />

          <TextInput
            placeholder="Senha"
            onChangeText={(value: string) => setPassword(value)}
            value={password}
            secureTextEntry={isPasswordVisible}
            isPassword
            styleContainer={Platform.OS === "android" && { bottom: 13 }}
            onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
          />
          <LoginButton onPress={() => handleLogin()}>
            <TitleButton>Entrar</TitleButton>
          </LoginButton>
        </ContainerLogin>
        <CreateAccountButton>
          <CreateAccountText>Criar uma conta</CreateAccountText>
          <ArrowRight name="arrowright" />
        </CreateAccountButton>
      </KeyboardAvoidingView>
    </Container>
  );
}
