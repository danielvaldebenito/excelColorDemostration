

export class Section {
    number: number = 0;
    formula = (gridSize: number, r: number, c: number) => {};
    constructor() {}

    getHex() {
        let hex = this.number.toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }

    getNumber() {
        return this.number;
    }
}