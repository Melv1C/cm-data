import { BaseData } from './BaseData';
import Competition_Event from "./Competition_Event";



abstract class Competition extends BaseData {

    _table: string = 'competitions';
    static TABLE: string = 'competitions';

    name: string = '';
    admin_id: string = '';
    competitionDate: Date = new Date();
    inscriptionEnd: Date = new Date();
    location: string = '';
    club: string = '';
    freeForOrgClub: boolean = false;
    linkSchedule: string = '';
    contactEmail: string = '';
    description: string = '';
    open: boolean = false;
    oneDayAthlete: boolean = false;
    foreignAthlete: boolean = true;
    events: Competition_Event[] = [];
    
    constructor(name?: string) {
        super();
        this.name = name || '';
    }
}

export default Competition;