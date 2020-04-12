import { Section } from "./Section";

export class A extends Section {
    hex: string;
    formula = () => Math.round(256 / ((this.r + 1) * this.gridSize) + this.c + 1);
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = this.formula();
        this.hex = this.getHex();
    }
}