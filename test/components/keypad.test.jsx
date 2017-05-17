/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Keypad from '../../app/components/keypad.component';
import Key from '../../app/components/key.component';

describe('<Keypad />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Keypad />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have x <Key /> components', () => {
    expect(wrapper.find(Key)).to.have.length(1);
  });
});
