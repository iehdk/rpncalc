import { describe, it } from 'mocha';
import { expect } from 'chai';


const Stack = require('../../app/utils/stack.util');

describe('a passing test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});

//
// describe('Stack', () => {
//   describe('Constructor', () => {
//     it('should have one property, ary', () => {
//       const sut = new Stack();
//       expect(sut).to.have.property('ary');
//       expect(sut).to.have.property('ost');
//     });
//   });
// });
