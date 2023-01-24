package com.danwalkercs.beansprout.service.user;

import com.danwalkercs.beansprout.entity.data.User;
import com.danwalkercs.beansprout.repository.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserSaveService {

    @Autowired
    private UserRepository userRepository;


    public User save(User user) {
        return userRepository.save(user);
    }
}
