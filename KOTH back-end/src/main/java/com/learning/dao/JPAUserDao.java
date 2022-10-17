package com.learning.dao;

import com.learning.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class JPAUserDao extends GenericDao<User> implements UserDao{

    public JPAUserDao() {
        super(User.class);
    }
}
