import { Kindergarten } from "./kindergarten";

export class SpecialClass {
    _id?: string = '';
    name: string = '';
    level?: string = '';
    kindergarten: string | Kindergarten = '';
    teacher: string = '';
    day: string = '';
    maxHeadcount?: number = 0;
    actualHeadcount: number = 0;
    active?: boolean = true
}
