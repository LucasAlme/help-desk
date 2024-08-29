import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import { colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

type ErrorProps = {
  error?: boolean;
};

export const DestContainer = styled.View`
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 4px;
`;

export const TouchableEye = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
  top: ${Platform.OS === "ios" ? 19 : 32}px;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const EyeIcon = styled(Ionicons)`
  align-self: flex-end;
`;

export const InputNewContainer = styled.View<ErrorProps>``;

export const InputTitleText = styled.Text<ErrorProps>`
  font-size: 15px;
  margin-bottom: 4px;
  color: ${colors.black};
`;

export const InputText = styled.TextInput<ErrorProps>`
  width: 100%;
  height: 45px;
  padding-left: 12px;
  font-size: 15px;
  color: #222222;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({ error }) => (error ? colors.error : colors.borderInput)};
`;

export const InputTextMasked = styled(TextInputMask)<ErrorProps>`
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  color: #222222;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({ error }) => (error ? colors.error : colors.borderInput)};
`;

export const ErrorText = styled.Text`
  width: 100%;
  font-size: 14px;
  margin-top: 6px;
  color: ${colors.error};
`;

export const SuccessText = styled.Text`
  width: 100%;
  font-size: 14px;
  margin-top: 6px;
  color: ${colors.green};
`;
