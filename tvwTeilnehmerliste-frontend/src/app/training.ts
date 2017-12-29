import { Member } from './member';
import { Trainer } from './trainer';

export class Training {
    id: number;
    date: string;
    trainers: Trainer[];
    members: Member[];
    showDetails: boolean;

    constructor (id: number, date: string, trainers: Member[], members: Member[]) {
        this.id = id;
        this.date = date;
        this.trainers = trainers;
        this.members = members;
        this.showDetails = false;
    }
}
