import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import Test from './Test';

describe('App tests', () => {
    test('Render correctly', () => {
        const props = {
            p1: 1,
            p2: 2,
        };
        const { getByText } = render(<Test {...props} />);
        const container = document.body;
        // expect(getByText(
        //     container,
        //     'test component!'
        // )).toBeTruthy();
        expect(getByText('test component!')).toBeTruthy();
    });
});
