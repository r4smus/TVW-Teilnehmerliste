import { Member } from './member';

export class Trainer extends Member {
    constructor (id: number, firstName: string, lastName: string, telNumber: string) 
  {
    super(id, firstName, lastName, telNumber);
  }

}
