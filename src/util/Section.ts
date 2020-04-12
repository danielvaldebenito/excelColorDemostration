

export class Section {
    number: number = 0;
    constructor() {}
    
    get hex() {
        let hex = this.number.toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }
}