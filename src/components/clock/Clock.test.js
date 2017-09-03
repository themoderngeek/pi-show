import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Clock from './index';

describe('Clock', () => {


    it('renders correctly', () => {
        const component = shallow(<Clock date={new Date()}/>);
        expect(component).to.have.length(1);
    });

    it('has the class digital', () => {
        const container = shallow(<Clock date={new Date()}/>);
        expect(container.find('.digital').length).to.equal(1);
    });


    it('displays the time from the properties', () => {
        const date = new Date(Date.parse("Sun, 03 Sep 2017 16:26:56"));
        const container = shallow(<Clock date={date}/>);
        expect(container.find('.digital').text()).to.contain("16:26:56");
    })

});

