import { Pilot } from './Pilot';
import { Stewardess } from './Stewardess';

export class Crew {
    public id: number;
    public pilotId: Pilot;
    public stewardessIds: Stewardess[];

    constructor() { }
}
