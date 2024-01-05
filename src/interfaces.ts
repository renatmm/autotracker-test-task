// export interface Device {
//     id: number;
//     name: string;
//     uniqueId: string;
//     status: boolean;
//     lastUpdate: string;
// }

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