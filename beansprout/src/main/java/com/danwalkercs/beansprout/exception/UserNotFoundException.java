package com.danwalkercs.beansprout.exception;

public class UserNotFoundException extends RuntimeException {

    UserNotFoundException() {
        super();
    }

    public UserNotFoundException(String msg) {
        super(msg);
    }
}
