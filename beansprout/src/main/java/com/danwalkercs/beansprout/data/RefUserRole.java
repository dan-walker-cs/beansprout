package com.danwalkercs.beansprout.entity.data;

import com.danwalkercs.beansprout.entity.AbstractDomainEntity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@EqualsAndHashCode(callSuper = true)
public class RefUserRole extends AbstractDomainEntity {

    @Getter
    @Setter
    private String name;
}
