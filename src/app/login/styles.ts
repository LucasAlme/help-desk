import styled from "styled-components/native";
import { Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/src/constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const ImageLogin = styled.Image.attrs({
  source: require("../../assets/images/helpDeskLogin.jpeg"),
})`
  height: 400px;
  width: 400px;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${colors.title};
  font-weight: bold;
  font-size: 26px;
`;

export const ContainerLogin = styled.View`
  padding-horizontal: 25px;
`;

export const LoginButton = styled.TouchableOpacity`
  border-radius: 5px;
  padding-left: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.purple};
  height: 45px;
  margin-top: ${Platform.OS === "ios" ? 20 : 0}px;
`;

export const TitleButton = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const CreateAccountText = styled.Text`
  color: ${colors.purple};
  font-size: 14px;
  font-weight: bold;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding-top: 20px;
`;

export const ArrowRight = styled(AntDesign).attrs({
  size: 22,
})`
  color: ${colors.purple};
  padding-left: 5px;
`;
