import bacnetEnums from '../../src/bacnet-enums';

describe('bacnetEnums', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(bacnetEnums, 'greet');
      bacnetEnums.greet();
    });

    it('should have been run once', () => {
      expect(bacnetEnums.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(bacnetEnums.greet).to.have.always.returned('hello');
    });
  });
});
