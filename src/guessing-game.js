class GuessingGame {
    constructor() {
        this.result;
        this.average;
        this.max;
        this.min;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.result = this.max - this.min;
    }

    guess() {
        this.average = Math.round(this.result / 2);
        return this.average;
    }

    lower() {
        this.max = this.average;
        this.result = this.max + this.min;
    }

    greater() {
        this.min = this.average;
        this.result = this.max + this.min;
    }
}

module.exports = GuessingGame;
