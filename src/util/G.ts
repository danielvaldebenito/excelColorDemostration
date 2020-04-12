import { Section } from "./Section";

export class G extends Section {
    hex: string;
    formula = () => Math.round(this.r * 255 / this.gridSize);
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = this.formula();
        this.hex = this.getHex();
    }
}