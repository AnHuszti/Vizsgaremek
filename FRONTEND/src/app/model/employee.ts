import { Group } from "./group";
import { Kindergarten } from "./kindergarten";

export class Employee {
    _id?: string = '';
    surname: string = '';
    firstname: string = '';
    position: string = '';
    kindergarten: string | Kindergarten = '';
    group?: string | Group = '';
    skills?: string = '';
    active: boolean = true;
    image?: string = ''
}
