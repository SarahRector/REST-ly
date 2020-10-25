/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component', () => {
  afterEach(() => cleanup());

  it('renders Controls', () => {
    const { asFragment } = render(<Controls
      url="https://hey-arnold-api.herokuapp.com/api/v1/characters/random?count=2"
      body=""
      method="GET"
      onSubmit={() => { }}
      onChange={() => { }}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
