export class B  {
    number: number;
    hex: string;
    constructor(gridSize: number, r: number, c: number) {
        this.number = this.getNumber(gridSize, r, c);
        this.hex = this.getHex();
    }

    getNumber(gridSize: number, r: number, c: number): number {
        const x = Math.round(r * 255 / (gridSize - 1));
        const y = Math.round(c * 255 / (gridSize - 1));
        return 255 - Math.round((x + y) / 2);
    }

    getHex() {
        let hex = this.number.toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }
}