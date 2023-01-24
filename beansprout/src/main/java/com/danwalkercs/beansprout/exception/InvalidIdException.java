package com.danwalkercs.beansprout.exception;

public class InvalidIdException extends RuntimeException {

    public InvalidIdException() {
        super();
    }

    public InvalidIdException(long id) {
        super("No record exists with id: " + id);
    }
}
