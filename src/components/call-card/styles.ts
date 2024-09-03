import { colors } from "@/src/constants/colors";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import styled from "styled-components/native";

interface CardStatus {
  status: "Finished" | "Open";
}
export const ContainerCard = styled.View<CardStatus>`
  background-color: ${colors.white};
  width: 100%;
  height: 120px;
  border-left-color: ${({ status }) =>
    status === "Finished" ? colors.purple : colors.openFilter};
  border-left-width: 7px;
  padding: 25px 20px 25px 25px;
  justify-content: space-between;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.title};
`;

export const TimeDescription = styled.Text`
  font-size: 12px;
  color: ${colors.descriptionTitle};
  font-weight: 500;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HourGlass = styled(MaterialIcons).attrs({
  size: 24,
})`
  color: ${colors.openFilter};
`;

export const IconDescription = styled(Feather)`
  color: ${colors.descriptionTitle};
`;

export const CrossHair = styled(MaterialCommunityIcons)`
  color: ${colors.descriptionTitle};
`;
export const CheckIcon = styled(Ionicons).attrs({
  size: 24,
})`
  color: ${colors.purple};
`;
