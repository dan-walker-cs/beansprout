package com.danwalkercs.beansprout.security;

import com.danwalkercs.beansprout.entity.data.RefUserRole;
import com.danwalkercs.beansprout.entity.data.User;
import com.danwalkercs.beansprout.repository.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private RelationshipService relationshipService;

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
//        return relationshipService.retrieveAllRolesByUser(user)
//                .stream()
//                .map(RefUserRole::getName)
//                .map(SimpleGrantedAuthority::new)
//                .collect(Collectors.toList());
        return new SimpleGrantedAuthority("ADMIN");
    }
}
