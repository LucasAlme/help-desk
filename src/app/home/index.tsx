import CallCard from "@/src/components/call-card";
import {
  AllFilter,
  Container,
  ContainerCall,
  Content,
  CreateNewCall,
  DescriptionTitle,
  FilterDescription,
  FilterTitle,
  Filters,
  FiltersContainer,
  FinishedFilter,
  Header,
  LengthCalls,
  ListCard,
  LogoutIcon,
  LogoutItem,
  OpenFilter,
  RowCallsTitle,
  RowContainer,
  Separator,
  Title,
  TitleButton,
  TitleCalls,
} from "./style";
import React, { useEffect, useState } from "react";
import { CallInterface } from "@/src/interface/call";
import { router } from "expo-router";

export default function Index() {
  const [calls] = useState<CallInterface[]>([
    { name: "Teclado", date: "03/09/2024", status: "Open", number: "123456" },
    {
      name: "Computador Desktop",
      date: "02/09/2024",
      status: "Finished",
      number: "123456",
    },
    {
      name: "Computador Notebook",
      date: "29/08/2024",
      status: "Open",
      number: "123456",
    },
  ]);

  const [filteredCalls, setFilteredCalls] = useState([] as CallInterface[]);

  const [filterSelected, setFilterSelected] = useState<
    "All" | "Finished" | "Open"
  >("All");

  useEffect(() => {
    if (filterSelected === "All") {
      setFilteredCalls(calls);
    } else {
      setFilteredCalls(calls.filter((call) => call.status === filterSelected));
    }
  }, [filterSelected]);

  return (
    <Container>
      <Header>
        <Title>Ola, Lucas</Title>
        <RowContainer>
          <DescriptionTitle>
            Conte conosco, estamos aqui para ajudar.
          </DescriptionTitle>
          <LogoutItem onPress={() => router.replace("/login")}>
            <LogoutIcon name="logout" />
          </LogoutItem>
        </RowContainer>
      </Header>
      <FiltersContainer>
        <FilterDescription>Filtre pelo status do chamado</FilterDescription>
        <Filters>
          <AllFilter
            filterSelected={filterSelected}
            onPress={() => setFilterSelected("All")}
          >
            <FilterTitle>Todos</FilterTitle>
          </AllFilter>
          <OpenFilter
            filterSelected={filterSelected}
            onPress={() => setFilterSelected("Open")}
          >
            <FilterTitle>Aberto</FilterTitle>
          </OpenFilter>
          <FinishedFilter
            filterSelected={filterSelected}
            onPress={() => setFilterSelected("Finished")}
          >
            <FilterTitle>Encerrado</FilterTitle>
          </FinishedFilter>
        </Filters>
      </FiltersContainer>

      <Content>
        <RowCallsTitle>
          <TitleCalls>Meus chamados</TitleCalls>
          <LengthCalls>
            {calls.length < 9 ? `0${calls.length}` : calls.length}
          </LengthCalls>
        </RowCallsTitle>
      </Content>
      <ListCard
        data={filteredCalls}
        renderItem={({ item }: { item: CallInterface }) => (
          <CallCard data={item} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <ContainerCall>
        <CreateNewCall>
          <TitleButton>Novo chamado</TitleButton>
        </CreateNewCall>
      </ContainerCall>
    </Container>
  );
}
