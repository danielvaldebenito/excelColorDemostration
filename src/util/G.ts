import { Section } from "./Section";

export class G extends Section {
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = Math.round(this.r * 255 / this.gridSize);
    }
}