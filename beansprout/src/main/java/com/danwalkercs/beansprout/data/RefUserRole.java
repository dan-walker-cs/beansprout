package com.danwalkercs.beansprout.data;

import jakarta.persistence.Entity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@EqualsAndHashCode(callSuper = true)
public class RefUserRole extends AbstractDomainEntity {

    @Getter
    @Setter
    private String name;
}
