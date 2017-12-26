package de.chris.tvwbackend.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
@Entity
public class Training {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	private Date date;

	@NotNull
	@OneToMany(mappedBy="trainer")
	private List<Member> trainers;

	@NotNull
	@OneToMany(mappedBy="member")
	private List<Member> members;
	
	public Training() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<Member> getTrainers() {
		return trainers;
	}

	public void setTrainers(List<Member> trainers) {
		this.trainers = trainers;
	}

	public List<Member> getMembers() {
		return members;
	}

	public void setMembers(List<Member> members) {
		this.members = members;
	}
	
	public String toString() {
		return String.format(
                "Training[id=%s, date='%s']",
                id, date);
	}

}
