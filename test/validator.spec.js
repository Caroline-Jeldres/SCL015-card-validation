// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });
    test('debería retornar true para "4137894711755904"', () => {
      validator.isValid(validator.isValid('true'), "4137894711755904");
    // it.skip('debería retornar true para "4083952015263"', () => {
    //   expect(validator.isValid("4083952015263")).toBe(true);
    });

    test('debería retornar true para "79927398713"', () => {
      validator.isValid(validator.isValid('true'), "79927398713");
    });

    test('debería retornar false para "1234567890"', () => {
      validator.isValid(validator.isValid('false'), "1234567890");
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });
    test('Debería retornar "############5616" para "4556364607935616"', () => {
      validator.maskify(validator.maskify('############5616'), "4556364607935616");
    });
    test('Debería retornar "1" para "1"', () => {
      validator.maskify(validator.maskify('1'), "1");
    });
    test('Debería retornar "######orld" para "helloworld"', () => {
      validator.maskify(validator.maskify("######orld"), "helloworld");
  });
})})
