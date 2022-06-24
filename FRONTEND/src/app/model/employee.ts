import { Group } from "./group";
import { Kindergarten } from "./kindergarten";

export class Employee {
    _id?: string = '';
    surname: string = '';
    firstname: string = '';
    position: string = '';
    //kindergarten: string = '';
    kindergarten: string | Kindergarten = '';
    //group?: string = '';
    group?: string | Group = '';
    skills?: string = '';
    image?: string = ''
    active: boolean = true;
}
