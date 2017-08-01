class Converter {
    constructor() {
        this.latinNumber = '';
    }

    convert(arabicNumber) {
        this.latinNumber = '';
        this.checkTens(arabicNumber);
        this.checkThree(arabicNumber);
        this.checkTwo(arabicNumber);

        switch(arabicNumber) {
            case 0:
                this.convertZero();
                break;
            case 1:
                this.convertOne();
                break;
            case 5:
                this.convertFive();
                break;
            case 50:
                this.convertFifty();
        }

        return this.latinNumber;
    }

    test() {
        console.log('test converter');
    }

    convertZero() {
        this.latinNumber += '';
    }

    convertOne() {
        this.latinNumber += 'I';
    }

    convertFive() {
        this.latinNumber += 'V';
    }

    convertTen() {
        this.latinNumber += 'X';
    }

    convertFifty() {
        this.latinNumber += 'L';
    }

    checkTwo(arabicNumber) {
        if((arabicNumber / 2) === 1) {
            for(let i = 1; i <= 2; i++) {
                this.convertOne();
            }
        }
    }

    checkThree(arabicNumber) {
        if((arabicNumber / 3) === 1) {
            for(let i = 1; i <= 3; i++) {
                this.convertOne();
            }
        }
    }

    checkTens(arabicNumber) {
        if((4 >= Math.abs(arabicNumber/10)) >= 1) {
            for(let i = 1; i <= Math.floor(arabicNumber/10); i++) {
                this.convertTen();
            }
        }
    }
}

exports.Converter = Converter;