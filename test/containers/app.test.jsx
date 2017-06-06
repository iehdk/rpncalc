/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, afterEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import App from '../../app/containers/app.container';
import Prompt from '../../app/components/prompt.component';
import Display from '../../app/components/display.component';
import Keypad from '../../app/components/keypad.component';
import Stack from '../../app/utils/stack.util';

describe('<App />', () => {
  const sandbox = sinon.sandbox.create();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    sandbox.restore();
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

  describe('constructor', () => {
    describe('state', () => {
      it('should have 4 states', () => {
        expect(Object.keys(wrapper.state()).length).to.eql(4);
      });

      it('should have state promptValue', () => {
        expect(wrapper.state().promptValue).to.equal('');
      });

      it('should have state history', () => {
        expect(wrapper.state().history).to.be.instanceOf(Object);
      });

      it('should have state stack', () => {
        expect(wrapper.state().stack).to.be.instanceOf(Object);
      });

      it('should have state keys', () => {
        expect(wrapper.state().keys).to.be.instanceOf(Object);
      });
    });

    describe('componentDidMount', () => {
      const mountSpy = sandbox.spy(App.prototype, 'componentDidMount');
      // const focusSpy = sandbox.spy(App.prototype, 'inputElement');

      it('calls componentDidMount', () => {
        expect(mountSpy).to.have.been.calledOnce;
      });

      it('should focus on inputElement');
      // it('should focus on inputElement', () => {
      //   expect(focusSpy).to.have.been.calledOnce;
      // });
    });

    describe('componentDidUpdate', () => {
      // const updateSpy = sandbox.spy(App.prototype, 'componentDidUpdate');

      it('calls componentDidUpdate');
      // it('calls componentDidUpdate', () => {
      //   wrapper.find('form').simulate('submit');
      //   expect(updateSpy).to.have.been.calledOnce;
      // });

      it('should focus on inputElement');
      it('should save history');
    });

    describe('_handleOnChange', () => {
      it('should set the state of promptValue');
    });

    describe('_handleOnSubmit', () => {
      it('should clear the state of promptValue');
      it('should update the state of stack');
      it('should add the stack to history');
    });

    describe('_handleOnClick', () => {
      it('should update the state of stack');
      it('should update the state of promptValue');
    });

    describe('_calcAdaptor', () => {
      describe('with value root', () => {
        const stack = new Stack();

        it('should call calcRoot', () => {
          const rootSpy = sandbox.spy(stack, 'calcRoot');
          wrapper.instance()._calcAdaptor('root', stack, 'bar', {});
          expect(rootSpy).to.have.been.calledOnce;
        });
      });

      describe('skip history flag set', () => {
        it('should not save history');
      });

      describe('skip history flag unset', () => {
        it('should save history');
      });
    });
  });
});
