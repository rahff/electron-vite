import { FileSystemAdapter } from '../electron/FileSystemAdapter';
import * as fs from "fs";



describe("FileSystemAdapter", ()=>{
    let fileSystemAdapter: FileSystemAdapter;

    beforeAll(()=> fs.mkdir("test", (err: any)=> console.log(err) ))
    beforeEach(()=>{ fileSystemAdapter = new FileSystemAdapter("test") })
    afterAll(()=> fs.readdirSync("test").map((filename: string)=> fs.unlink(filename, (err:any)=> console.log(err))));

    it('should save a file and write his content', ()=>{
        const filePayload = {filename: "test.txt", text: "hello"};

        const success = fileSystemAdapter.handleSaveFileCommand(filePayload);

        expect(success).toBeTrue();
    })
})