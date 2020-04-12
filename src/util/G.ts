export class G  {
    number: number;
    hex: string;
    constructor(gridSize: number, r: number, c: number) {
        this.number = this.getNumber(gridSize, r, c);
        this.hex = this.getHex();
    }

    getNumber(gridSize: number, r: number, c: number): number {
        return Math.round(r * 255 / gridSize);
    }

    getHex() {
        let hex = this.number.toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }
}