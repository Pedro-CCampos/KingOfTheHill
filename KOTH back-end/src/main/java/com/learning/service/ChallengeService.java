package com.learning.service;

import com.learning.dao.ChallengeDao;
import com.learning.model.Challenge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ChallengeService {

    private ChallengeDao challengeDao;

    @Autowired
    public void setChallengeDao(ChallengeDao challengeDao) {
        this.challengeDao = challengeDao;
    }

    public List<Challenge> getChallengeList() {
        return challengeDao.getAll();
    }

    public Challenge getChallengeById(Integer id) {
        return challengeDao.getById(id);
    }

}
