import React from 'react';
import { render } from '@testing-library/react-native';
import ListSocata from './ListSocata';

// Exemplo de dados de teste
const testData = [
  { id: 1, brand: 'Toyota', model: 'Camry', year: 2022 },
  { id: 2, brand: 'Toyota', model: 'Corolla', year: 2021 },
  { id: 3, brand: 'Honda', model: 'Civic', year: 2023 },
];

// Mock da função que fornece os dados
jest.mock('../../services/data', () => ({
  data: testData,
}));

describe('ListSocata', () => {
  it('agrupa carros por marca corretamente', () => {
    const { getByText } = render(<ListSocata />);

    expect(getByText('Toyota')).toBeDefined();
    expect(getByText('Honda')).toBeTruthy();

    expect(getByText('ID: 1')).toBeTruthy();
    expect(getByText('Camry')).toBeTruthy();
    expect(getByText('2022')).toBeTruthy();

  expect(getByText('ID: 2')).toBeTruthy();
  expect(getByText('Corolla')).toBeTruthy();
   expect(getByText('2021')).toBeTruthy();

  expect(getByText('ID: 3')).toBeTruthy();
  expect(getByText('Civic')).toBeTruthy();
  expect(getByText('2023')).toBeTruthy();




  
  });
});
