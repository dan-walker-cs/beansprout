package com.danwalkercs.beansprout.repository.data;

import com.danwalkercs.beansprout.entity.data.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}
