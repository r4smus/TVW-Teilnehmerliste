package de.chris.tvwbackend.models;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
@Entity
public class Trainer extends Member {

}
