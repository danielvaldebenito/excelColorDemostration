import { Section } from "./Section";

export class B extends Section {
    hex: string;
    formula = () => {
        const x = Math.round(this.r * 255 / (this.gridSize - 1));
        const y = Math.round(this.c * 255 / (this.gridSize - 1));
        return 255 - Math.round((x + y) / 2);
    }
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = this.formula();
        this.hex = this.getHex();
    }

}