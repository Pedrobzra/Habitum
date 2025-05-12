import { Ionicons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Input, InputField } from "@/components/ui/input";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { ChevronRightIcon } from "@/components/ui/icon";
import ColorPicker, { Swatches } from "reanimated-color-picker";
import { runOnJS } from "react-native-reanimated";
import HabitBox from "@/components/HabitBox";
import Button from "@/components/Button";
import { getHabitDraft, updateHabitDraft } from "@/services/createHabit";
import InfoHabitBtn from "@/components/CreateHabit/InfoHabitBtn";
import FrequencyForms from "@/components/CreateHabit/FrequencyForms";
import InfoHabitSwitch from "@/components/CreateHabit/InfoHabitSwitch";
import AlertHourForms from "@/components/CreateHabit/AlertHourForms";
import DisabledWrapper from "@/components/CreateHabit/DisableHabitWrapper";
import ToDoDateForms from "@/components/CreateHabit/ToDoDateForms";
import ValidationError from "@/components/ValidationError";
import useItemConsts from "@/constants/Item";
import postHabit from "@/api/habits/postHabit";
import postTodo from "@/api/todo/postTodo";
import { router } from "expo-router";
import { useItem } from "@/constants/ItemContext";

type Props = {
  buttonText: string;
  onPress: () => void;
  habitId?: string;
};

export default function CreateHabit({ buttonText, onPress, habitId }: Props) {
  const isEditing = !!habitId;

  const {
    icon,
    setIcon,
    name,
    setName,
    desc,
    setDesc,
    goal,
    setGoal,
    color,
    setColor,
    frequency,
    setFrequency,
    alertHour,
    setAlertHour,
    alertHourTime,
    setAlertHourTime,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    showAlertPicker,
    setShowAlertPicker,
    showEndDate,
    setShowEndDate,
    showStartDate,
    setShowStartDate,
    isTodo,
    setIsTodo,
    notifications,
    setNotifications,
    interval,
    setInterval,
    activeDays,
    setActiveDays,
  } = useItem();

  const [errorMessages, setErrorMessages] = useState<{
    [key: string]: string[];
  }>({});

  useFocusEffect(
    useCallback(() => {
      async function fetchDraft() {
        const draft = await getHabitDraft();
        if (draft) {
          setIcon(draft.icon);
          setColor(draft.color);
        }
      }

      fetchDraft();
    }, [])
  );

  const onSuccessNavigation = () => {
    router.push({
      pathname: "/SuccessHabit",
      params: { action: isEditing ? "updated" : "created" },
    });
  };
  const CreateItemAPI = async () => {
    let updatedWeekDays: string[] = [];
    if (frequency === 1) {
      const daysOfWeek = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
      ];

      updatedWeekDays = activeDays
        .map((active, i) => (active ? daysOfWeek[i] : null))
        .filter(Boolean) as string[];
    }

    if (isTodo) {
      await postTodo(
        {
          name,
          icon,
          color,
          desc,
          notifications,
          startDate,
          endDate,
        },
        setErrorMessages
      );
      onSuccessNavigation();
    } else
      await postHabit(
        {
          name,
          icon,
          color,
          desc,
          notifications,
          frequency,
          weekDays: updatedWeekDays,
          interval,
          alertHour,
          alertHourTime,
          goal,
        },
        setErrorMessages
      );
    onSuccessNavigation();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <HabitBox text="Pré-Visualização">
          <View>
            <HStack style={{ gap: 20 }}>
              <Box style={{ width: "20%", alignItems: "center" }}>
                <Ionicons name={icon as any} size={60} color={color} />
              </Box>
              <Box style={{ width: "70%", gap: 5 }}>
                <TextInput
                  value={name}
                  onChangeText={(newName) => {
                    setName(newName);
                  }}
                  placeholder="Adicione um título"
                  maxLength={25}
                  style={{
                    padding: 10,
                    backgroundColor: "#F0f0f0",
                    borderRadius: 5,
                    width: "100%",
                  }}
                />
                <ValidationError messages={errorMessages.Name} />
              </Box>
            </HStack>
          </View>
        </HabitBox>

        <HabitBox text="Aparência">
          <InfoHabitBtn
            icon="image"
            text="Ícone"
            preview={<Ionicons name={icon as any} size={20} color={color} />}
            type="modal"
          />
          <InfoHabitBtn
            icon="palette"
            text="Cor"
            type="none"
            preview={
              <ColorPicker
                style={{
                  justifyContent: "center",
                }}
              >
                <Swatches
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                  colors={[color]}
                  swatchStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    alignSelf: "center",
                  }}
                />
              </ColorPicker>
            }
          >
            <Box className="p-5">
              <ColorPicker
                onChange={(color) => {
                  runOnJS(setColor)(color.hex);
                  var selectedColor = color.hex;
                  updateHabitDraft({ color: selectedColor });
                }}
              >
                <Swatches
                  colors={[
                    "#D32F2F",
                    "#F4511E",
                    "#FF5733",
                    "#FF8D1A",
                    "#FFC300",
                    "#AED581",
                    "#4CAF50",
                    "#388E3C",
                    "#00BCD4",
                    "#03A9F4",
                    "#2196F3",
                    "#3F51B5",
                    "#9C27B0",
                    "#BA68C8",
                    "#E91E63",
                    "#F06292",
                    "#795548",
                    "#9E9E9E",
                    "#d9d9d9",
                    "#607D8B",
                    "#000000",
                  ]}
                  swatchStyle={{ width: 28, height: 28, borderRadius: 5 }}
                />
              </ColorPicker>
            </Box>
          </InfoHabitBtn>
        </HabitBox>

        <HabitBox text="Informações">
          <InfoHabitBtn icon="comments" text="Descrição" type="none">
            <Textarea
              size="sm"
              style={{
                borderWidth: 2,
                borderColor: "#F0F0F0",
                marginBottom: 10,
              }}
            >
              <TextareaInput
                value={desc}
                onChangeText={(newDesc) => {
                  setDesc(newDesc);
                }}
                placeholder="Descreva mais sobre sua nova meta..."
              />
            </Textarea>
          </InfoHabitBtn>
          <DisabledWrapper disabled={isTodo}>
            <InfoHabitBtn
              icon="bullseye"
              text="Meta"
              type="none"
              preview={<ValidationError messages={errorMessages.Goal} />}
            >
              <HStack style={{ height: 60 }}>
                <Input
                  variant="underlined"
                  size="md"
                  style={{ width: "100%", padding: 5 }}
                >
                  <InputField
                    value={goal}
                    placeholder="Quantidade...ex: 200m de corrida"
                    onChangeText={(value: string) => {
                      setGoal(value);
                    }}
                  />
                </Input>
              </HStack>
            </InfoHabitBtn>
          </DisabledWrapper>
          <InfoHabitSwitch
            icon="bell"
            text="Permitir Notificações"
            type="notifications"
            onChange={(value) => {
              setNotifications(value);
            }}
          />
        </HabitBox>

        <HabitBox text="Tipo">
          <InfoHabitSwitch
            icon="list-check"
            text="Tarefa"
            type="todo"
            onChange={(value) => {
              setIsTodo(value);
            }}
          >
            <Text style={{ padding: 5, fontSize: 12 }}>
              *Ao selecionar a tarefa, alguns campos serão desabilitados.*
            </Text>
          </InfoHabitSwitch>
          {isTodo && (
            <>
              <InfoHabitBtn
                icon={"hourglass-start"}
                text={"Início da Tarefa"}
                type={Platform.OS === "ios" ? "alertHour" : "none"}
                endDate={startDate}
                onPress={() => setShowStartDate(true)}
              >
                <ToDoDateForms
                  show={showStartDate}
                  onClose={() => {
                    setShowStartDate(false);
                  }}
                  type="startDate"
                  onDateChange={(type, date) => {
                    if (type === "startDate") setStartDate(date);
                  }}
                ></ToDoDateForms>
              </InfoHabitBtn>
              <InfoHabitBtn
                icon={"hourglass-end"}
                type={Platform.OS === "ios" ? "alertHour" : "none"}
                text={"Fim da Tarefa"}
                endDate={endDate}
                onPress={() => setShowEndDate(true)}
              >
                <ToDoDateForms
                  show={showEndDate}
                  onClose={() => {
                    setShowEndDate(false);
                  }}
                  type="endDate"
                  onDateChange={(type, date) => {
                    if (type === "endDate") setEndDate(date);
                  }}
                ></ToDoDateForms>
              </InfoHabitBtn>
            </>
          )}
        </HabitBox>

        <DisabledWrapper disabled={isTodo}>
          <HabitBox text="Frequência">
            <InfoHabitBtn
              icon="repeat"
              text="Repetição"
              type="none"
              preview={
                <Select
                  selectedValue={
                    frequency == 0
                      ? "Diário"
                      : frequency == 1
                      ? "Semanal"
                      : "Intervalo"
                  }
                  onValueChange={(value) => {
                    const numeric = parseInt(value);
                    setFrequency(numeric);
                  }}
                >
                  <SelectTrigger
                    style={{
                      borderWidth: 0,
                    }}
                    size="md"
                  >
                    <SelectInput />
                    <SelectIcon className="mr-3" as={ChevronRightIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Diário" value="0" />
                      <SelectItem label="Semanal" value="1" />
                      <SelectItem label="Intervalo" value="2" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              }
            />
            <FrequencyForms
              frequency={frequency}
              activeDays={activeDays}
              setActiveDays={setActiveDays}
              interval={interval}
              setInterval={setInterval}
            />
          </HabitBox>
        </DisabledWrapper>

        <DisabledWrapper disabled={isTodo}>
          <HabitBox text="Alerta">
            <InfoHabitSwitch
              icon="clock"
              text="Avisar no Horário"
              type="alerthour"
              onChange={(value) => setAlertHour(value)}
            />
            {alertHour && (
              <InfoHabitBtn
                icon="hourglass"
                text="Horário de Alerta"
                type="alertHour"
                alertHourTime={alertHourTime}
                onPress={() => setShowAlertPicker(true)}
              >
                <AlertHourForms
                  show={showAlertPicker}
                  onClose={() => setShowAlertPicker(false)}
                  onTimeSelected={(date) => {
                    setAlertHourTime(date);
                  }}
                />
              </InfoHabitBtn>
            )}
          </HabitBox>
        </DisabledWrapper>
        <Button
          text={buttonText || (isEditing ? "Salvar Alterações" : "Criar")}
          onPress={onPress || CreateItemAPI}
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
