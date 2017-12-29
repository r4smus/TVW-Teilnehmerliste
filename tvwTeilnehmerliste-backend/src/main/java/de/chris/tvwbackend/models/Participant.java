package de.chris.tvwbackend.models;

import javax.persistence.Entity;

@Entity
public class Participant extends Member {
	
	@Override
    public String toString() {
        return String.format(
                "Member[id=%s, firstName='%s', lastName='%s']",
                this.getId(), this.getFirstName(), this.getLastName());
    }

}
