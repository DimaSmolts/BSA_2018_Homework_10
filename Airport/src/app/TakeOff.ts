import { Flight } from './flight';
import { Crew } from './Crew';
import { Plane } from './Plane';

export class TakeOff {
    public id: number;
    public flightNum: Flight;
    public date: Date;
    public crewId: Crew;
    public planeId: Plane;

    constructor() { }
}
