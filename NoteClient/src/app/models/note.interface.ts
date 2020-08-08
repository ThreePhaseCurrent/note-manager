export interface INote {
    id: number;
    title: string;
    text: string;
    dateInit: Date;
    dateUpdate: Date;
    isActual: boolean;
}