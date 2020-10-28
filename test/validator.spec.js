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
    // test('debería retornar true para "4137894711755904"', () => {
      // validator.isValid(validator.isValid('true'), "4137894711755904");
    it('debería retornar "VALIDA" para "4083952015263"', () => {
      expect(validator.isValid("4083952015263")).toBe("VALIDA");
    });

    it('debería retornar "VALIDA" para "79927398713"', () => {
      expect(validator.isValid("79927398713")).toBe("VALIDA");
    });

    it('debería retornar "INVALIDA" para "1234567890"', () => {
      expect(validator.isValid("1234567890")).toBe("INVALIDA");
    });
  });
  
  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });
    it('Debería retornar "°°°°°°°°°°°°5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe ("°°°°°°°°°°°°5616");
    });
    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe ("1");
    });
    it('Debería retornar "°°°°°°orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe ("°°°°°°orld");
  });
})})
