/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('Display component', () => {
  afterEach(() => cleanup());

  const testDisplay = {
    'characters': [
      {
        '_id': '5da237699734fdcb7bef9036',
        'name': 'Sidney',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d4/Sidney.jpg/revision/latest/scale-to-width-down/310?cb=20120807185330'
      },
      {
        '_id': '5da237699734fdcb7bef8f9e',
        'name': 'Edmund',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/0/0a/Edmund.png/revision/latest?cb=20171219083557'
      }
    ]
  };

  it('renders Display', () => {
    const { asFragment } = render(<Display
      display={testDisplay}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
