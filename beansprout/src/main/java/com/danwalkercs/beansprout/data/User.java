package com.danwalkercs.beansprout.data;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class User extends AbstractDomainEntity {

    private String email;

    private String username;

    private String password;

    private String name;

    private String bio;

    private boolean visibility;
}
