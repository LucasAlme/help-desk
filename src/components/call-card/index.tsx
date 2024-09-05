import React from "react";
import {
  CheckIcon,
  ContainerCard,
  CrossHair,
  HourGlass,
  IconDescription,
  RowContainer,
  TimeDescription,
  Title,
} from "./styles";
import { CallInterface } from "@/src/interface/call";

interface CallCardInterface {
  data: CallInterface;
  onPress: () => void;
}

export default function CallCard({ data, onPress }: CallCardInterface) {
  return (
    <ContainerCard status={data.status} onPress={onPress}>
      <RowContainer>
        <Title numberOfLines={1}>{data.name}</Title>
        {data.status === "Open" ? (
          <HourGlass name="hourglass-empty" size={24} />
        ) : (
          <CheckIcon name="checkmark-circle" size={24} />
        )}
      </RowContainer>
      <RowContainer>
        <TimeDescription>
          <IconDescription name="clock" /> {data.date}
        </TimeDescription>
        <TimeDescription>
          <CrossHair name="crosshairs-gps" />
          {data.number}
        </TimeDescription>
      </RowContainer>
    </ContainerCard>
  );
}
