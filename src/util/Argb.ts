import { A } from "./A";
import { R } from "./R";
import { G } from "./G";
import { B } from "./B";

export class Argb {
    hex: string;
    a: A;
    r: R;
    g: G;
    b: B;

    constructor(private _gridSize: number, private _r: number, private _c: number) {
        this.a = new A(_gridSize, _r, _c);
        this.r = new R(_gridSize, _r, _c);
        this.g = new G(_gridSize, _r, _c);
        this.b = new B(_gridSize, _r, _c);
        this.hex = this.getHex();
    }

    private getHex() {
        return this.a.hex + this.r.hex + this.g.hex + this.b.hex;
    }

    
}