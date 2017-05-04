import { describe, it } from 'mocha';
import { expect } from 'chai';
import Stack from '../../app/utils/stack.util';

describe('stack.util -> Stack', () => {
  describe('Constructor', () => {
    const stack = new Stack();

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

  describe('calcRoot', () => {
    describe('with empty stack', () => {
      const stack = new Stack();
      it('shouldn\'t change the stack', () => {
        expect(stack.calcRoot().ary).to.eql([]);
      });
    });

    describe('with negative last value', () => {
      const stack = new Stack([1, -2]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcRoot().ary).to.eql([1, -2]);
      });
    });

    describe('with last value 0', () => {
      const stack = new Stack([1, 0]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcRoot().ary).to.eql([1, 0]);
      });
    });

    describe('with positive last value', () => {
      const stack = new Stack([1, 4]);
      it('should replace the last value with it\'s square root', () => {
        expect(stack.calcRoot().ary).to.eql([1, 2]);
      });
    });
  });

  describe('calcExp', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcExp().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the exponent x^y', () => {
        expect(stack.calcExp().ary).to.eql([8]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the exponent x^y', () => {
        expect(stack.calcExp().ary).to.eql([1, 8]);
      });
    });
  });

  describe('calcReciprocal', () => {
    describe('with empty stack', () => {
      const stack = new Stack();
      it('shouldn\'t change the stack', () => {
        expect(stack.calcReciprocal().ary).to.eql([]);
      });
    });

    describe('with last value 0', () => {
      const stack = new Stack([1, 0]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcReciprocal().ary).to.eql([1, 0]);
      });
    });

    describe('with non-zero last value', () => {
      const stack = new Stack([1, 4]);
      it('should replace the last value with it\'s reciprocal value', () => {
        expect(stack.calcReciprocal().ary).to.eql([1, 0.25]);
      });
    });
  });

  describe('calcAdd', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcAdd().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the sum of these', () => {
        expect(stack.calcAdd().ary).to.eql([5]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the sum of these', () => {
        expect(stack.calcAdd().ary).to.eql([1, 5]);
      });
    });
  });

  describe('calcSubstract', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcSubstract().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the substraction of these', () => {
        expect(stack.calcSubstract().ary).to.eql([-1]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the substraction of these', () => {
        expect(stack.calcSubstract().ary).to.eql([1, -1]);
      });
    });
  });

  describe('calcMultiply', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcMultiply().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the product of these', () => {
        expect(stack.calcMultiply().ary).to.eql([6]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the product of these', () => {
        expect(stack.calcMultiply().ary).to.eql([1, 6]);
      });
    });
  });

  describe('calcDivide', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcDivide().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 4]);
      it('should replace the last two values with the division of these', () => {
        expect(stack.calcDivide().ary).to.eql([0.5]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 4]);
      it('should replace the last two values with the division of these', () => {
        expect(stack.calcDivide().ary).to.eql([1, 0.5]);
      });
    });
  });

  describe('calcSum', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcSum().ary).to.eql([1]);
      });
    });

    describe('with stack size lager than two', () => {
      const stack = new Stack([1, 2, 4]);
      it('should replace the stack values with the sum of these', () => {
        expect(stack.calcSum().ary).to.eql([7]);
      });
    });
  });

  describe('pop', () => {
    describe('with empty', () => {
      const stack = new Stack([]);
      const value = stack.pop();

      it('shouldn\'t change the stack', () => {
        expect(stack.ary).to.eql([]);
      });

      it('the value should be undefined', () => {
        expect(value).to.eql(undefined);
      });
    });

    describe('with stack size of one', () => {
      const stack = new Stack([4]);
      const value = stack.pop();

      it('should remove the last element on the stack', () => {
        expect(stack.ary).to.eql([]);
      });

      it('the value should be correct', () => {
        expect(value).to.eql(4);
      });
    });

    describe('with stack size larger than one', () => {
      const stack = new Stack([4, 5]);
      const value = stack.pop();

      it('should remove the last element on the stack', () => {
        expect(stack.ary).to.eql([4]);
      });

      it('the value should be correct', () => {
        expect(value).to.eql(5);
      });
    });
  });

  describe('swap', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.swap().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should swap the last two elements on the stack', () => {
        expect(stack.swap().ary).to.eql([3, 2]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should swap the last two elements on the stack', () => {
        expect(stack.swap().ary).to.eql([1, 3, 2]);
      });
    });
  });

  describe('empty', () => {
    const stack = new Stack([1, 2, 3]);
    it('should empty the stack', () => {
      expect(stack.empty().ary).to.eql([]);
    });
  });
});
