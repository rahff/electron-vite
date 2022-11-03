import { contextBridge, ipcRenderer } from "electron";


contextBridge.exposeInMainWorld('electronApi', {
  fileSystemBridge: {
    dispatch: (command: any): any => ipcRenderer.invoke(command.name, command.payload)
  }
})