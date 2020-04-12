import { ExportColor } from "./util/ExportColor";



(async () => {
    try {
        const work: ExportColor = new ExportColor();
        await work.run();
    } catch (error) {
        throw error;
    }
})();
