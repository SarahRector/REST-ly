/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Restly from './restly';
import { apiFetch } from '../services/apiFetch';

jest.mock('../services/apiFetch');

describe('restly container', () => {
  it('uses GET to get a result from the api', async() => {
    apiFetch.mockResolvedValue({
      '_id': '5da237699734fdcb7bef9036',
      'name': 'Sidney',
      'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d4/Sidney.jpg/revision/latest/scale-to-width-down/310?cb=20120807185330'
    },
    {
      '_id': '5da237699734fdcb7bef8f9e',
      'name': 'Edmund',
      'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/0/0a/Edmund.png/revision/latest?cb=20171219083557'
    });

    render(<Restly />);

    const button = screen.getByTestId('button');
    await fireEvent.click(button);

    const display = await screen.findByTestId('display');

    expect(display).not.toBeEmptyDOMElement();
  });
});
