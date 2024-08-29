import React, { useRef, useImperativeHandle, forwardRef } from "react";
import ReactNative, {
  ViewStyle,
  TextStyle,
  KeyboardType,
  ReturnKeyType,
  TouchableOpacity,
} from "react-native";
import {
  TextInputMaskTypeProp,
  TextInputMaskOptionProp,
} from "react-native-masked-text";

import {
  DestContainer,
  InputNewContainer,
  InputText,
  InputTitleText,
  ErrorText,
  SuccessText,
  EyeIcon,
  TouchableEye,
} from "./styles";
import { colors } from "@/src/constants/colors";

type RefType =
  | ((instance: ReactNative.TextInput | null) => void)
  | React.RefObject<ReactNative.TextInput>
  | null
  | undefined
  | ((ref: any) => void);

type TextInputProps = {
  styleContainer?: ViewStyle;
  styleInput?: TextStyle;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  returnKeyType?: ReturnKeyType;
  keyboardType?: KeyboardType;
  value: string;
  inputTitle: string;
  autoFocus?: boolean;
  success?: boolean;
  error?: boolean;
  errorMessage?: string;
  successMessage?: string;
  onSubmitEditing?: () => void;
  ref?: RefType;
  masked?: boolean;
  maskType?: TextInputMaskTypeProp;
  maskOption?: TextInputMaskOptionProp;
  focus?: boolean;
  disabled?: boolean;
  maxLength?: number;
  secureTextEntry?: boolean;
  isPassword?: boolean;
  onPressIcon?:
    | ((event: ReactNative.GestureResponderEvent) => void)
    | undefined;
};

function TextInput(props: TextInputProps, ref: any) {
  const {
    value,
    onChangeText,
    placeholder,
    styleContainer,
    styleInput,
    keyboardType = "default",
    returnKeyType,
    inputTitle,
    secureTextEntry,
    isPassword,
    autoFocus,
    error,
    success,
    errorMessage,
    successMessage,
    onSubmitEditing,
    onPressIcon,
    disabled,
    maxLength,
  } = props;

  const inputRef = useRef<ReactNative.TextInput>(null);
  let maskInput: ReactNative.TextInput | undefined;

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
      maskInput?.focus();
    },
  }));

  return (
    <DestContainer style={styleContainer}>
      <InputNewContainer error={error}>
        <InputTitleText error={error}>{inputTitle}</InputTitleText>
        <InputText
          error={error}
          ref={inputRef}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={colors.borderInput}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          value={value}
          onChangeText={onChangeText}
          style={styleInput}
          editable={!disabled}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          maxLength={maxLength || 1000}
        />
        {isPassword && (
          <TouchableEye onPress={onPressIcon}>
            <EyeIcon name="eye" size={20} />
          </TouchableEye>
        )}
      </InputNewContainer>
      {error && <ErrorText>{errorMessage}</ErrorText>}
      {success && <SuccessText>{successMessage}</SuccessText>}
    </DestContainer>
  );
}

export default forwardRef(TextInput);
