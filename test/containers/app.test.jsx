/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';

import App from '../../app/containers/app.container';
import Prompt from '../../app/components/prompt.component';
import Display from '../../app/components/display.component';
import Keypad from '../../app/components/keypad.component';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have one <Display /> component', () => {
    expect(wrapper.find(Display)).to.have.length(1);
  });

  it('should have one <Prompt /> component', () => {
    expect(wrapper.find(Prompt)).to.have.length(1);
  });

  it('should have one <Keypad /> component', () => {
    expect(wrapper.find(Keypad)).to.have.length(1);
  });
});
