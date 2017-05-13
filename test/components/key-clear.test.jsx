/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import KeyClear from '../../app/components/key-clear.component';

describe('<KeyClear/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<KeyClear />);
  });

  it('should have one button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have class names key key-width-2', () => {
    expect(wrapper.find('button').hasClass('key key-width-2')).to.be.true;
  });

  it('should have the text CLEAR', () => {
    expect(wrapper.text()).to.equal('CLEAR');
  });

  it('should have props onclick event handler', () => {
    expect(wrapper.props()._handleOnClick).to.be.defined;
  });
});
