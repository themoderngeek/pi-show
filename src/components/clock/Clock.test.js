import React from 'react';
import chai, { expect, style } from 'chai';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
import Clock from './index';

describe('Clock', () => {

    chai.use(chaiEnzyme());

    it('renders correctly', () => {
        const component = shallow(<Clock date={new Date()}/>);
        expect(component).to.have.length(1);
    });

    it('has the class digital when type is set to digital', () => {
        const container = shallow(<Clock date={new Date()} type="digital"/>);
        expect(container.find('.digital').length).to.equal(1);
    });

    it('displays the time from the properties', () => {
        const date = new Date(Date.parse("Sun, 03 Sep 2017 16:26:56"));
        const container = shallow(<Clock date={date} type="digital"/>);
        expect(container.find('.hours').text()).to.contain("16");
        expect(container.find('.minutes').text()).to.contain("26");
        expect(container.find('.seconds').text()).to.contain("56");
    });

    it('has the class analog when the type is set to analog', () => {
        const container = shallow(<Clock date={new Date()} type="analog"/>);
        expect(container.find('.analog').length).to.equal(1);
    });

    it('applies 480 degree z rotation to hours style when hours are 16', () => {
        const date = new Date(Date.parse("Sun, 03 Sep 2017 16:26:56"));
        const container = render(<Clock date={date} type="analog"/>);
        expect(container.find('.hours')).to.have.style("transform", "rotateZ(480deg)");
    });

    it('applies 156 degree z rotation to minutes style when minutes are 26', () => {
        const date = new Date(Date.parse("Sun, 03 Sep 2017 16:26:56"));
        const container = render(<Clock date={date} type="analog"/>);
        expect(container.find('.minutes')).to.have.style("transform", "rotateZ(156deg)");
    });

    it('applies 336 degree z rotation to seconds style when seconds are 56', () => {
        const date = new Date(Date.parse("Sun, 03 Sep 2017 16:26:56"));
        const container = render(<Clock date={date} type="analog"/>);
        expect(container.find('.seconds')).to.have.style("transform", "rotateZ(336deg)");
    });

    it('applies additional rotation to the hour hand after half past the hour', () => {
        const date = new Date(Date.parse("Sun, 03 Sep 2017 16:31:56"));
        const container = render(<Clock date={date} type="analog"/>);
        expect(container.find('.hours')).to.have.style("transform", "rotateZ(496deg)");
    })

});

