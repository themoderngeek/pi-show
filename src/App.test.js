import React from 'react';
import App from './App';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';

describe('App', () => {
    it('renders correctly', () => {
        const app = shallow(<App />);
        expect(app).to.have.length(1);
    });

    it('contains a Clock component', () => {
        const app = render(<App />);
        expect(app.find('.clock')).to.have.length(1)
    });
});

