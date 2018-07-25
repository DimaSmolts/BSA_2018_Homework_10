import { PlaneType } from './PlaneType';

export class Plane {
    public id: number;
    public name: string;
    public type: PlaneType;
    public made: Date;
    public exploitation: string; // shoould be timespan here

    constructor() { }
}
