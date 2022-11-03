export interface ElectronApi {
    fileSystemBridge: {
      dispatch: (command: Command<Object>) => void
    }
}

export interface Command<T extends Object> {
    name: string;
    payload: T
}