import { Section } from "./Section";

export class B extends Section {
    constructor(private gridSize: number, private r: number, private c: number) {
        super();
        this.number = this._number;
    }

    get _number() {
        const x = Math.round(this.r * 255 / (this.gridSize - 1));
        const y = Math.round(this.c * 255 / (this.gridSize - 1));
        return 255 - Math.round((x + y) / 2);
    }

}