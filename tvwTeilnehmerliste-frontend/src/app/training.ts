import { Member } from './member';
import { Trainer } from './trainer';
import { Participant } from 'app/participant';

export class Training {
    id: number;
    date: string;
    trainers: Trainer[];
    participants: Participant[];
    showDetails: boolean;
}
