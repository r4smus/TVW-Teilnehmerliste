package de.chris.tvwbackend.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
@Entity
public class Training {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	private Date date;

	@OneToMany(
	        cascade = CascadeType.ALL, 
	        orphanRemoval = true
	    )
	private List<Trainer> trainers = new ArrayList<Trainer>();

	@OneToMany(
	        cascade = CascadeType.ALL, 
	        orphanRemoval = true
	    )
	private List<Member> members = new ArrayList<Member>();
	
	
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

	public List<Trainer> getTrainers() {
		return trainers;
	}

	public List<Member> getMembers() {
		return members;
	}
	
	public String toString() {
		return String.format(
                "Training[id=%s, date='%s']",
                id, date);
	}

}
