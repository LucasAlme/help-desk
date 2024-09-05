import CallCard from "@/src/components/call-card";
import {
  AllFilter,
  CallStatus,
  Container,
  ContainerCall,
  Content,
  CreateNewCall,
  DashText,
  Description,
  DescriptionTitle,
  FilterDescription,
  FilterTitle,
  Filters,
  FiltersContainer,
  FinishedFilter,
  Header,
  InformationContent,
  LengthCalls,
  ListCard,
  LogoutIcon,
  LogoutItem,
  OpenFilter,
  RowCallsTitle,
  RowContainer,
  Separator,
  SubTitle,
  Title,
  TitleButton,
  TitleCalls,
  TitleDetailsModal,
} from "./style";
import React, { useEffect, useRef, useState } from "react";
import { CallInterface } from "@/src/interface/call";
import { router } from "expo-router";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { colors } from "@/src/constants/colors";
import { CheckIcon, HourGlass } from "@/src/components/call-card/styles";
import TextInput from "@/src/components/text-input";
import { KeyboardAvoidingView } from "react-native";

export default function Index() {
  const [calls, setCalls] = useState<CallInterface[]>([
    {
      name: "Teclado",
      date: "03/09/2024",
      status: "Open",
      number: "123456",
      description: "Teclado com problemas tecnicos...",
    },
    {
      name: "Computador Desktop",
      date: "02/09/2024",
      status: "Finished",
      number: "123456",
      description: "Computador desktop não funciona corretamente...",
    },
    {
      name: "Computador Notebook",
      date: "29/08/2024",
      status: "Open",
      number: "123456",
      description: "Computador notebook não funciona corretamente...",
    },
  ]);

  const [callSelected, setCallSelected] = useState({} as CallInterface);

  const [filteredCalls, setFilteredCalls] = useState([] as CallInterface[]);
  const bottomModalCallDetailsRef = useRef<BottomSheetModal>(null);
  const bottomModalNewCallRef = useRef<BottomSheetModal>(null);
  const [filterSelected, setFilterSelected] = useState<
    "All" | "Finished" | "Open"
  >("All");

  const [itemName, setItemName] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  useEffect(() => {
    if (filterSelected === "All") {
      setFilteredCalls(calls);
    } else {
      setFilteredCalls(calls.filter((call) => call.status === filterSelected));
    }
  }, [filterSelected, calls]);

  function handleOpenCallDetailsModal(item: CallInterface) {
    setCallSelected(item);
    bottomModalCallDetailsRef.current?.present();
  }
  function handleOpenNewCall() {
    bottomModalNewCallRef.current?.present();
  }

  function addNewCall() {
    const newCall = {
      name: itemName,
      description: itemDescription,
      number: itemNumber,
      status: "Open",
      date: "05/09/2024",
    };
    setCalls((calls) => [...calls, newCall]);
    bottomModalNewCallRef.current?.dismiss();
  }

  return (
    <Container>
      <KeyboardAvoidingView style={{ flex: 1 }}>
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
            <CallCard
              data={item}
              onPress={() => handleOpenCallDetailsModal(item)}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <ContainerCall>
          <CreateNewCall onPress={() => handleOpenNewCall()}>
            <TitleButton>Novo chamado</TitleButton>
          </CreateNewCall>
        </ContainerCall>

        <BottomSheetModal
          ref={bottomModalCallDetailsRef}
          backgroundStyle={{
            backgroundColor: colors.white,
          }}
          snapPoints={["50%"]}
        >
          <TitleDetailsModal>Detalhes</TitleDetailsModal>
          {callSelected.status === "Finished" ? (
            <CallStatus>
              <HourGlass name="hourglass-empty" size={30} />
              <DashText>
                - - - - - - - - - - - - - - - - - - - - - - - - - -
              </DashText>
              <CheckIcon name="checkmark-circle" size={30} />
            </CallStatus>
          ) : (
            <CallStatus>
              <HourGlass name="hourglass-empty" size={30} />
            </CallStatus>
          )}

          <InformationContent>
            <SubTitle>Equipamento</SubTitle>
            <Description>{callSelected.name}</Description>
          </InformationContent>
          <InformationContent>
            <SubTitle>Número de Patrimônio</SubTitle>
            <Description>{callSelected.number}</Description>
          </InformationContent>
          <InformationContent>
            <SubTitle>Descrição</SubTitle>
            <Description numberOfLines={4}>
              {callSelected.description}
            </Description>
          </InformationContent>
        </BottomSheetModal>

        <BottomSheetModal
          ref={bottomModalNewCallRef}
          backgroundStyle={{
            backgroundColor: colors.white,
          }}
          snapPoints={["60%"]}
        >
          <TitleDetailsModal>Novo chamado</TitleDetailsModal>

          <InformationContent>
            <TextInput
              placeholder="Tipo do Equipamento"
              onChangeText={(value: string) => setItemName(value)}
              value={itemName}
            />
            <TextInput
              placeholder="Número do Patrimônio"
              onChangeText={(value: string) => setItemNumber(value)}
              value={itemNumber}
            />
            <TextInput
              placeholder="Descrição"
              styleInput={{ height: 130, paddingBottom: 90 }}
              styleContainer={{ alignSelf: "center" }}
              onChangeText={(value: string) => setItemDescription(value)}
              value={itemDescription}
            />
          </InformationContent>
          <ContainerCall style={{ marginTop: 20 }}>
            <CreateNewCall onPress={() => addNewCall()}>
              <TitleButton>Novo chamado</TitleButton>
            </CreateNewCall>
          </ContainerCall>
        </BottomSheetModal>
      </KeyboardAvoidingView>
    </Container>
  );
}
