import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExerciseResult } from '../utils/calculateExercises';

interface Props { data: ExerciseResult; }

const ResultCard: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Resumen de entrenamiento</Text>
      <View style={styles.row}><Text style={styles.label}>Período (días):</Text><Text style={styles.value}>{data.periodLength}</Text></View>
      <View style={styles.row}><Text style={styles.label}>Días entrenados:</Text><Text style={styles.value}>{data.trainingDays}</Text></View>
      <View style={styles.row}><Text style={styles.label}>Objetivo (hrs/día):</Text><Text style={styles.value}>{data.target}</Text></View>
      <View style={styles.row}><Text style={styles.label}>Promedio real:</Text><Text style={styles.value}>{data.average} hrs</Text></View>
      <View style={styles.row}><Text style={styles.label}>¿Objetivo alcanzado?</Text><Text style={[styles.value, data.success ? styles.successText : styles.failText]}>{data.success ? 'Sí' : 'No'}</Text></View>
      <View style={styles.ratingContainer}><Text style={styles.ratingLabel}>Calificación ({data.rating}/3):</Text><Text style={styles.ratingDesc}>{data.ratingDescription}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 3, marginBottom: 20 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#2c3e50', textAlign: 'center', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  label: { fontSize: 16, color: '#555', fontWeight: '500' },
  value: { fontSize: 16, color: '#222', fontWeight: '600' },
  successText: { color: 'green' },
  failText: { color: 'red' },
  ratingContainer: { marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#eee' },
  ratingLabel: { fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' },
  ratingDesc: { fontSize: 14, color: '#666', fontStyle: 'italic' },
});

export default ResultCard;