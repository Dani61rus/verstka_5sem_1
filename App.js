import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Image, 
  Text, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://cs15.pikabu.ru/post_img/2025/01/26/0/1737841982144319288.jpg' }}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Тёмка Лебедев</Text>
            <Text style={styles.title}>Не Frontend Developer</Text>
            <Text style={styles.bio}>
              Не люблю React Native, люблю дизайнить московское метро. Дизайню московское метро уже 15 лет.
            </Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill1}>JavaScript</Text>
            <Text style={styles.skill1}>React Native</Text>
            <Text style={styles.skill2}>UI/UX</Text>
            <Text style={styles.skill2}>Team Management</Text>
            <Text style={styles.skill2}>Team Lead</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Подписаться</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
    // Тень для iOS
    shadowColor: '#0D417A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    // Тень для Android
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#636363',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  skill1: {
    backgroundColor: '#B70000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
    color: 'white',
  },
  skill2: {
    backgroundColor: '#00B700',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
    color: 'white',
  },
  button: {
    backgroundColor: '#0D417A',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});