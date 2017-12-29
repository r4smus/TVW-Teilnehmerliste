import { Member } from './member';
import { Trainer } from './trainer';
import { Participant } from 'app/participant';

export class Training {
    id: number;
    date: string;
    trainers: Trainer[];
    participants: Participant[];
    showDetails: boolean;

    constructor (id: number, date: string, trainers: Trainer[], participants: Participant[]) {
        this.id = id;
        this.date = date;
        this.trainers = trainers;
        this.participants = participants;
        this.showDetails = false;
    }
}
