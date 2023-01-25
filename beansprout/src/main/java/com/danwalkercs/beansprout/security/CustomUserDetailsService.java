package com.danwalkercs.beansprout.security;

import com.danwalkercs.beansprout.data.User;
import com.danwalkercs.beansprout.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);

        user.orElseThrow(() -> new UsernameNotFoundException("No user with username: " + username + " exists in system."));

        CustomUserDetails userDetails = user.map(CustomUserDetails::new).get();
        userDetails.setAuthorities(resolveAuthorities(user.get()));

        return userDetails;
    }

    private List<SimpleGrantedAuthority> resolveAuthorities(User user) {
        // TODO: Retrieve all roles by user &
        return Collections.singletonList(new SimpleGrantedAuthority("ADMIN"));
    }
}
