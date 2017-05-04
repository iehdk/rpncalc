import { describe, it } from 'mocha';
import { expect } from 'chai';
import Stack from '../../app/utils/stack.util';

describe('Stack', () => {
  const stack = new Stack();

  describe('Constructor', () => {
    it('should have one property', () => {
      expect(Object.keys(stack).length).to.eql(1);
    });

    it('should have property ary', () => {
      expect(stack).to.have.property('ary');
    });

    describe('without parameter', () => {
      it('should have empty ary', () => {
        expect(stack.ary).to.eql([]);
      });
    });

    describe('with parameter [2, 5]', () => {
      const stack2 = new Stack([2, 5]);
      it('should have ary [2, 5]', () => {
        expect(stack2.ary).to.eql([2, 5]);
      });
    });
  });
});
