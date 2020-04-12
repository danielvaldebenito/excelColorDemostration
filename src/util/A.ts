import { Section } from "./Section";

export class A extends Section {
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = Math.round(256 / ((this.r + 1) * this.gridSize) + this.c + 1);
    }
}