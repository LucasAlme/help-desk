import styled from "styled-components/native";

import { colors } from "@/src/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

interface FilterInterface {
  filterSelected: "All" | "Finished" | "Open";
}
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;
export const Content = styled.View`
  padding-horizontal: 20px;
  padding-top: 60px;
`;
export const RowContainer = styled.View`
  flex-direction: row;
`;
export const Header = styled.View`
  padding: 30px 20px 50px 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.title};
`;
export const DescriptionTitle = styled.Text`
  font-size: 13px;
  color: ${colors.descriptionTitle};
`;

export const LogoutItem = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${colors.purple};
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 10px;
`;

export const LogoutIcon = styled(MaterialIcons).attrs({
  size: 20,
})`
  color: ${colors.white};
`;

export const FiltersContainer = styled.View`
  padding-horizontal: 20px;
`;
export const AllFilter = styled.TouchableOpacity<FilterInterface>`
  background-color: ${colors.allFilter};
  width: 34%;
  padding-vertical: 8px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  opacity: ${({ filterSelected }) => (filterSelected !== "All" ? 0.5 : 1)};
`;
export const FinishedFilter = styled.TouchableOpacity<FilterInterface>`
  background-color: ${colors.purple};
  width: 33%;
  padding-vertical: 8px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
  opacity: ${({ filterSelected }) => (filterSelected !== "Finished" ? 0.5 : 1)};
`;
export const OpenFilter = styled.TouchableOpacity<FilterInterface>`
  background-color: ${colors.openFilter};
  width: 33%;
  padding-vertical: 8px;

  align-items: center;
  justify-content: center;
  opacity: ${({ filterSelected }) => (filterSelected !== "Open" ? 0.5 : 1)};
`;
export const Filters = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const FilterDescription = styled.Text`
  align-self: center;
  padding-bottom: 15px;
  color: ${colors.title};
`;
export const FilterTitle = styled.Text`
  align-self: center;
  color: ${colors.white};
`;

export const TitleCalls = styled.Text`
  color: ${colors.title};
  font-weight: bold;
  font-size: 20px;
`;

export const RowCallsTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const LengthCalls = styled.Text`
  color: ${colors.descriptionTitle};
  font-weight: bold;
  font-size: 12px;
`;

export const ListCard = styled.FlatList`
  padding-horizontal: 20px;

  margin-bottom: 20px;
`;

export const Separator = styled.View`
  padding-top: 20px;
`;

export const CreateNewCall = styled.TouchableOpacity`
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

export const ContainerCall = styled.View`
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;
