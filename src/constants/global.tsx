import { Device } from "../interfaces";

export const NAV_ITEMS = [ 
    'Учетные записи',
    'Пользователи',
    'Объекты',
    'Водители',
    'Уведомления',
    'Задания'
];

export const TABLE_TITLE= [ 
    'Id',
    'Название',
    'Уникальный Id',
    'Статус',
    'Последнее обновление'
];
    
export const DEVICES: Device[] = [
    {
        id: '1',
        name: 'Машина 1',
        uniqueId: 'UNQ123',
        status: true,
        lastUpdate: '2022-01-15 10:30:00',
    },
    {
        id: '2',
        name: 'Машина 2',
        uniqueId: 'UNQ456',
        status: false,
        lastUpdate: '2022-01-14 15:20:00',
    },
    {
        id: '3',
        name: 'Машина 3',
        uniqueId: 'UNQ734',
        status: false,
        lastUpdate: '2022-01-13 17:00:00',
    },

];