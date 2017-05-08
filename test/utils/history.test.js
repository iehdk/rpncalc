import { describe, it } from 'mocha';
import { expect } from 'chai';
import History from '../../app/utils/history.util';

describe('history.util -> History Class', () => {
  const history = new History();

  describe('constructor', () => {
    it('should have one property', () => {
      expect(Object.keys(history).length).to.eql(1);
    });

    it('should have property ary', () => {
      expect(history).to.have.property('ary');
    });

    describe('without parameter', () => {
      it('should have empty ary', () => {
        expect(history.ary).to.eql([]);
      });
    });

    describe('with parameter [[2], [2, 5]]', () => {
      const history2 = new History([[2], [2, 5]]);
      it('should have ary [[2], [2, 5]]', () => {
        expect(history2.ary).to.eql([[2], [2, 5]]);
      });
    });
  });
});
