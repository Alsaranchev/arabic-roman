const { Converter } = require('../arabic-roman.js');

describe("Jasmine test", () => {
    let a;

    it("can be started", () => {
        a = true;
        expect(a).toBe(true);
    });
});

describe('Arabic-Roman converter', () => {
    let converter = new Converter();

    it('zero returns empty string', () => {
        let latinNumber = converter.convert(0);
        expect(latinNumber).toBe('');
    });

    it('1 returns I', () => {
        let latinNumber = converter.convert(1);
        expect(latinNumber).toBe('I');
    });

    it('5 returns V', () => {
        let latinNumber = converter.convert(5);
        expect(latinNumber).toBe('V');
    });

    it('10 returns X', () => {
        let latinNumber = converter.convert(10);
        expect(latinNumber).toBe('X');
    });

    it('2 returns II', () => {
        let latinNumber = converter.convert(2);
        expect(latinNumber).toBe('II');
    });

    it('3 returns III', () => {
        let latinNumber = converter.convert(2);
        expect(latinNumber).toBe('II');
    });

    it('20 returns XX', () => {
        let latinNumber = converter.convert(20);
        expect(latinNumber).toBe('XX');
    });

    it('50 returns L', () => {
        let latinNumber = converter.convert(50);
        expect(latinNumber).toBe('L');
    });
});