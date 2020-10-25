/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  afterEach(() => cleanup());

  const testArray = [
    { url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters/random?count=2', method: 'GET' },
    { url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters/random?count=2', method: 'POST' },
  ];

  it('renders HistoryList', () => {
    const { asFragment } = render(<HistoryList 
      histories={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
