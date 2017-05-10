'use strict';

global.mocha = require('mocha');
global.chai = require('chai');
global.sinon = require('sinon');
global.sinonChai = require('sinon-chai');

global.chai.should();
global.expect = global.chai.expect;
global.chai.use(global.sinonChai);


// import { expect } from 'chai';
// import sinon from 'sinon';
//
// import { expect } from 'chai';
// import { sinon, spy } from 'sinon';
// import { mount, render, shallow } from 'enzyme';
//
// global.expect = expect;
// global.sinon = sinon;
// global.spy = spy;
//
// global.mount = mount;
// global.render = render;
// global.shallow = shallow;
