import { MappedDnkInterface } from './interface/mapped-dnk.interface';

export class MappedDnk implements MappedDnkInterface {

    public eyes:string;
    public hair:string;
    public race:string;
    [key: string]: string;

    constructor() {
        this.eyes = '';
        this.hair = '';
        this.race = '';
    }
}