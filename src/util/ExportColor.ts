// Libraries
import Excel, { Workbook, Worksheet, Row, Cell } from 'exceljs';
import fs from 'fs';
import path from 'path';
import { Argb } from './Argb';
// Constants
const EXPORT_PATH = './output';
const SIZE = 1600;

export class ExportColor {
    fileId = Math.random().toString(36).slice(2) + '.xlsx';
    private deep: number = 1;
    private gridSize: number = 0;
    private cellSize: number = 0;
    constructor() {
    }


    public async run() {
        try {
            // Create output directory if it'nt exists
            if (!fs.existsSync(EXPORT_PATH)) {
                fs.mkdirSync(EXPORT_PATH, { recursive: true });
            }
            // Create workbook
            const filePath = path.resolve(EXPORT_PATH, this.fileId);
            const stream = fs.createWriteStream(filePath);
            const workbook: Excel.stream.xlsx.WorkbookWriter = new Excel.stream.xlsx.WorkbookWriter({
                stream,
                useStyles: true
            }); 

            
            
            // Create colors cells! 😎
            const data = this.getData();
            
            console.log('cell size', this.cellSize);
            // Create sheet
            const worksheet = workbook.addWorksheet('COLORS', { properties: { defaultColWidth: this.cellSize / 4, defaultRowHeight: this.cellSize }});
            for (const dataRow of data) {
                const excelRow = worksheet.addRow({});
                for (const [ c, dataCell ] of dataRow.entries()) {
                    const pColor: Partial<Excel.Color> = { argb: dataCell.hex };
                    excelRow.getCell(c + 1).value = dataCell.hex;
                    excelRow.getCell(c + 1).fill = this.getFillStyle(pColor);
                    excelRow.getCell(c + 1).alignment = { vertical: 'middle', horizontal: 'center' };
                    excelRow.getCell(c + 1).font = { size: this.cellSize * 0.3 };
                }
                excelRow.height = this.cellSize;
            }
            worksheet.commit();
            await workbook.commit();

            console.log('Listo', this.fileId);
        } catch (error) {
            
        }
    }

    private getData() {
        // Define sizes and lengths
        this.gridSize = Math.round(100 + 16 * this.deep);
        this.cellSize = Math.round(SIZE / this.gridSize);
        
        // Create data
        
        const rows = [];
        for (let r = 0; r < this.gridSize; r++) { // r: Row
            const row: Argb[] = [];
            for (let c = 0; c < this.gridSize; c++) { // c: Column
                const argb = new Argb(this.gridSize, r, c);
                row.push(argb);
            }
            rows.push(row);
        }
        return rows;
    }

    getFillStyle (color: Partial<Excel.Color>): Excel.Fill {
        return {
            type: 'pattern',
            pattern: 'solid',
            fgColor: color,
            bgColor: color
        }
    }
    
}