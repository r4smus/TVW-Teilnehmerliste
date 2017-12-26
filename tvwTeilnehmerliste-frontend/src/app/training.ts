import { Member } from './member';

export class Training {
    id: number;
    date: string;
    trainers: Member[];
    members: Member[];
    showDetails: boolean;

    constructor (id: number, date: string, trainers: Member[], members: Member[], showDetails: boolean) {
        this.id = id;
        this.date = date;
        this.trainers = trainers;
        this.members = members;
        this.showDetails = showDetails;
    }
}
