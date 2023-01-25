package com.danwalkercs.beansprout.controller.user;

import com.danwalkercs.beansprout.data.User;
import com.danwalkercs.beansprout.service.user.UserSaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/user")
public class UserSaveController {

    @Autowired
    private UserSaveService userSaveService;


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user) {
        return userSaveService.save(user);
    }
}
