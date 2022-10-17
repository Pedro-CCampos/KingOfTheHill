package com.learning.dao;

import com.learning.model.Challenge;
import org.springframework.stereotype.Repository;

@Repository
public class JPAChallengeDao extends GenericDao<Challenge> implements ChallengeDao{

    public JPAChallengeDao() {
        super(Challenge.class);
    }
}
