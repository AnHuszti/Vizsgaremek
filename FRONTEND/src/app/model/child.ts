import { Group } from "./group";
import { Kindergarten } from "./kindergarten";

export class Child {
    _id?: string = '';
    surname: string = '';
    firstname: string = '';
    age: number = 0;
    kindergarten: string | Kindergarten = '';
    group: string | Group = '';
    mothername: string = '';
    phone: string = '';
    picture: string = ''; // final: image or icon
    active: boolean = true;
}