package com.danwalkercs.beansprout.service.user;

import com.danwalkercs.beansprout.entity.data.User;
import com.danwalkercs.beansprout.repository.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserListingService {

    @Autowired
    private UserRepository userRepository;


    public List<User> retrieveAllUsers() {
        return userRepository.findAll();
    }
}
