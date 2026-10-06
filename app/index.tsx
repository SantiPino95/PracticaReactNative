import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>
        Sistema de gestión de equipos industriales
      </Text>
      <Text style={styles.description}>
        Usa el menú lateral para navegar entre las secciones: consulta la lista
        de equipos, agrega nuevos equipos o revisa las novedades de
        mantenimiento.
      </Text>
      <Link href="/equipos" style={styles.button}>
        <Text style={styles.buttonText}>Ver equipos</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#1e3a5f',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
