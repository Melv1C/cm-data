
import { BaseData } from './BaseData';

abstract class Event extends BaseData {

    _table: string = 'events';
    static TABLE: string = 'events';

    name: string = '';
    abbr: string = '';
    eventGrouping: string = '';
    eventType: string = '';

    constructor() {
        super();
    }
}

export default Event;