import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateExercises } from './utils/calculateExercises';
import ResultCard from './components/ResultCard';

export default function App() {
  const hoursArray = [3, 0, 2, 4.5, 0, 3, 1];
  const target = 2;
  const result = calculateExercises(hoursArray, target);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Ejercicio</Text>
      <Text style={styles.subtitle}>Seguimiento semanal</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Horas diarias: {hoursArray.join(' · ')}</Text>
        <Text style={styles.infoText}>Objetivo: {target} hora(s) por día</Text>
      </View>
      <ResultCard data={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8', padding: 16, paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1e293b', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#64748b', textAlign: 'center', marginBottom: 20 },
  infoBox: { backgroundColor: '#e2e8f0', padding: 12, borderRadius: 12, marginBottom: 16 },
  infoText: { fontSize: 16, color: '#0f172a', textAlign: 'center', marginVertical: 2 },
});