import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyAppComponent(props) {
  const { title, version, developerName, githubLink } = props;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.version}>Versão {version}</Text>
        <View style={styles.developerInfo}>
          <Text style={styles.developerText}>Desenvolvido por:</Text>
          <Text style={styles.developerName}>{developerName}</Text>
          <Text style={styles.githubLink}>{githubLink}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30, // Aumentei o padding para tornar o card um pouco maior
    alignItems: 'center',
    elevation: 5, // Sombra para efeito de elevação
  },
  title: {
    fontSize: 32, // Aumentei o tamanho do título
    fontWeight: 'bold',
    marginBottom: 15, // Aumentei a margem inferior do título
  },
  version: {
    fontSize: 18, // Aumentei o tamanho da versão
    marginBottom: 20,
  },
  developerInfo: {
    alignItems: 'center',
  },
  developerText: {
    fontSize: 18, // Aumentei o tamanho do texto "Desenvolvido por:"
  },
  developerName: {
    fontSize: 20, // Aumentei o tamanho do nome do desenvolvedor
    fontWeight: 'bold',
    marginBottom: 10, // Aumentei a margem inferior do nome do desenvolvedor
  },
  githubLink: {
    fontSize: 18, // Aumentei o tamanho do link do GitHub
    color: '#3399ff',
    textDecorationLine: 'underline',
  },
});
