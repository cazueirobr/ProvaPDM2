import React from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';
import { data } from '../../services/data';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

// Agrupando os carros por marca
const groupedData: Record<string, Car[]> = data.reduce((acc, car) => {
  if (!acc[car.brand]) {
    acc[car.brand] = [];
  }
  acc[car.brand].push(car);
  return acc;
}, {} as Record<string, Car[]>);

// Convertendo os dados agrupados em um formato que o SectionList possa usar
const sections = Object.keys(groupedData).map((brand) => ({
  title: brand,
  data: groupedData[brand],
}));

const renderItem = ({ item }: { item: Car }) => (
  <View style={styles.itemContainer}>
    <View style={styles.item}>
      <Text style={styles.itemText}>ID: {item.id}</Text>
      <Text style={styles.itemText}>{item.model}</Text>
      <Text style={styles.itemText}>{item.year}</Text>
    </View>
  </View>
);

export default function ListSocata() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <View style={styles.brandContainer}>
            <Text style={styles.brandText}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#f2f2f2',
  },
  brandContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#3399ff', // azul
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', //branco
  },
  itemContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff', //branco
    width: '80%',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333', //preto
  },
});
