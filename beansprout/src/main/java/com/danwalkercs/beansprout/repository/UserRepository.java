package com.danwalkercs.beansprout.repository;

import com.danwalkercs.beansprout.data.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}
