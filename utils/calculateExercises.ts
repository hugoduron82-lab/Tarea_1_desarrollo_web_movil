// utils/calculateExercises.ts
export interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export function calculateExercises(hours: number[], target: number): ExerciseResult {
  const periodLength = hours.length;
  const trainingDays = hours.filter(h => h > 0).length;
  const average = hours.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= target;

  let rating: number;
  let ratingDescription: string;
  if (average >= target) {
    rating = 3;
    ratingDescription = '¡Excelente! Cumpliste el objetivo.';
  } else if (average >= target * 0.7) {
    rating = 2;
    ratingDescription = 'No está mal, pero puedes mejorar.';
  } else {
    rating = 1;
    ratingDescription = 'Debes entrenar más.';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average: Number(average.toFixed(2)),
  };
}