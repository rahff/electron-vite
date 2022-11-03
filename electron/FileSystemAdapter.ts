import * as fs from "fs";

export class FileSystemAdapter {

    constructor(private baseDirectory: string){}

    public handleSaveFileCommand(payload: {filename: string, text: string}): boolean {
        try{
            fs.writeFileSync(`${this.baseDirectory}/${payload.filename}`, payload.text);
            return true;
        }catch {
            return false;
        }
    }
}


/// poosiblity to inject fs in constructor for test purpose
export const fileSystemAdapter = new FileSystemAdapter("user");