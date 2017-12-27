package de.chris.tvwbackend.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import de.chris.tvwbackend.models.Member;


@Transactional
public interface MemberRepository extends CrudRepository<Member, Integer>  {

}