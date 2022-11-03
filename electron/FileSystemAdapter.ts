import * as fs from "fs";

export class FileSystemAdapter {

    public handleSaveFileCommand(payload: any): void {    
        fs.writeFileSync(payload.filename, payload.text);
    }
}


/// poosiblity to inject fs in constructor for test purpose
export const fileSystemAdapter = new FileSystemAdapter();