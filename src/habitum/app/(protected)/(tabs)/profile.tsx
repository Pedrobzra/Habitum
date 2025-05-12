// profile.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // para trocar a foto
import { useAuth } from "@/api/authApi";
import { router } from "expo-router";
import Button from "@/components/Button";

export default function Profile() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const { onLogout } = useAuth();

  // Função para trocar foto
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto + nome + email */}
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../../../assets/images/profilePictures/pp-default.png") // sua imagem padrão
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <Text style={styles.username}>Matheus</Text>
      <Text style={styles.email}>matheus@email.com</Text>

      {/* Botão de editar perfil */}
      <View style={{ flexDirection: "row", gap: 20 }}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Editar Perfil</Text>
        </TouchableOpacity>
        <Button
          theme="profileBtn"
          text="Sair"
          onPress={async () => {
            await onLogout;
            router.replace("/start");
          }}
        ></Button>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsCard}>
        <Text style={styles.sectionTitle}>Estatísticas</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>15</Text>
            <Text>Concluídos</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text>Pendentes</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text>Em andamento</Text>
          </View>
        </View>
      </View>

      {/* Conquistas */}
      <View style={styles.achievements}>
        <Text style={styles.sectionTitle}>Conquistas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.badge}>
            <Text>🎯 10 dias seguidos</Text>
          </View>
          <View style={styles.badge}>
            <Text>🔥 5 hábitos concluídos</Text>
          </View>
          <View style={styles.badge}>
            <Text>🏆 Primeira semana</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#68D5B9",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    color: "#777",
    fontSize: 14,
  },
  editBtn: {
    backgroundColor: "#68D5B9",
    padding: 15,
    borderRadius: 10,
  },
  editBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  statsCard: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#68D5B9",
  },
  achievements: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  badge: {
    backgroundColor: "#E0F7F1",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});
