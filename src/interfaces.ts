export interface Device {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
    }
}

export interface IErorMessage{
    errorTitle: string;
    errorText: string;
}