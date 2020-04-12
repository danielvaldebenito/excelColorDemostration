import { Section } from "./Section";

export class R extends Section {
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = Math.round(this.c * 255 / this.gridSize);
    }
}