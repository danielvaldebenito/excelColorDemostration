import { Section } from "./Section";

export class R extends Section {
    hex: string;
    formula = () => Math.round(this.c * 255 / this.gridSize);
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = this.formula();
        this.hex = this.getHex();
    }
}