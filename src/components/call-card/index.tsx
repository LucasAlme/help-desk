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
}

export default function CallCard({ data }: CallCardInterface) {
  return (
    <ContainerCard status={data.status}>
      <RowContainer>
        <Title numberOfLines={1}>{data.name}</Title>
        {data.status === "Open" ? (
          <HourGlass name="hourglass-empty" />
        ) : (
          <CheckIcon name="checkmark-circle" />
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
