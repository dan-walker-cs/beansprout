package com.danwalkercs.beansprout.security;

import com.danwalkercs.beansprout.entity.data.User;
import com.danwalkercs.beansprout.repository.rel.RelUserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class CustomUserDetails implements UserDetails {

    @Autowired
    private RelUserRoleRepository relUserRoleRepository;

    private final String username;
    private final String password;
    private List<SimpleGrantedAuthority> authorities;

    public CustomUserDetails(User user) {
        this.username = user.getUsername();
        this.password = user.getPassword();
    }

    public void setAuthorities(List<SimpleGrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // No account expiration rules as of now
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // This can always be true unless we implement ToS
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // No credential expiration rules as of now
    }

    @Override
    public boolean isEnabled() {
        return true; // TODO: Add active flag in DB
    }
}
