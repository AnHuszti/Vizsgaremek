import { Kindergarten } from "./kindergarten";

export class Group {
    _id?: string = '';
    name: string = '';
    kindergarten: string | Kindergarten = '';
    teacherFirst: string = '';
    teacherSecond: string = '';
    nurse: string = '';
    ageGroup: string = '';
    maxHeadcount: number = 0;
    actualHeadcount: number = 0;
    active: boolean = true
}
