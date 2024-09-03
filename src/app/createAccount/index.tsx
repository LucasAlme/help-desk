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
} from "./style";
import { KeyboardAvoidingView, Platform } from "react-native";
import TextInput from "@/src/components/text-input";
import { router } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleCreateAccount = () => {
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
          <Title>Cadastrar</Title>
          <TextInput
            placeholder="Nome"
            value={name}
            onChangeText={(value: string) => setName(value)}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(value: string) => setEmail(value)}
            styleContainer={Platform.OS === "android" && { bottom: 7 }}
          />

          <TextInput
            placeholder="Senha"
            onChangeText={(value: string) => setPassword(value)}
            value={password}
            secureTextEntry={isPasswordVisible}
            isPassword
            styleContainer={Platform.OS === "android" && { bottom: 14 }}
            onPressIcon={() => setIsPasswordVisible(!isPasswordVisible)}
          />
          <LoginButton onPress={() => handleCreateAccount()}>
            <TitleButton>Cadastrar</TitleButton>
          </LoginButton>
        </ContainerLogin>
        <CreateAccountButton onPress={() => router.navigate("/login")}>
          <ArrowRight name="arrowleft" />
          <CreateAccountText>Eu já tenho uma conta</CreateAccountText>
        </CreateAccountButton>
      </KeyboardAvoidingView>
    </Container>
  );
}
