package com.danwalkercs.beansprout.data;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.io.Serializable;


/**
 * Abstract Entity class to provide id column & generation strategy to data Entities.
 */
@MappedSuperclass
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AbstractDomainEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
}
