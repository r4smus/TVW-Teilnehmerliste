export abstract class Member {
    id: number;
    firstName: string;
    lastName: string;
    telNumber: string;
    selected: boolean;

    constructor (id: number, firstName: string, lastName: string, telNumber: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.telNumber = telNumber;
        this.selected = false;
    }
}
