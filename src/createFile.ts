import { ElectronApi } from '../shared/ElectronApi';
declare const electronApi: ElectronApi;

export const createFile = (filename: string, text: string)=>{
    if(filename.endsWith('.txt')){
        electronApi.fileSystemBridge.dispatch({name: "saveFile", payload: {filename, text}});
    }
}