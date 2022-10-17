package com.learning.service;


import com.learning.dao.ChallengeDao;
import com.learning.dao.UserDao;
import com.learning.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@Transactional
public class MultiplierService {

    private ChallengeDao challengeDao;
    private UserDao userDao;

    @Autowired
    public void setChallengeDao(ChallengeDao challengeDao) {
        this.challengeDao = challengeDao;
    }

    @Autowired
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    public ChallengeDao getChallengeDao() {
        return challengeDao;
    }

    public UserDao getUserDao() {
        return userDao;
    }

    public void userRatingIncrement(User user) {

        if(user.getRating() == 0) {
            user.setRating(Double.parseDouble(String.format("%.1f", user.getRating() + 0.5)));
        }
        else {
            if(user.getRating() <= 1.6) {
                user.setRating(Double.parseDouble(String.format("%.1f", user.getRating() + 0.2)));
            }
            if(user.getRating() * 1.03 <= 10) {
                user.setRating(Double.parseDouble(String.format("%.1f", user.getRating() * 1.03)));
            }
            if(user.getRating() * 1.03 > 10) {
                user.setRating(10);
            }
        }
    }

    public void userRatingDecrement(User user) {
        if(user.getRating() <= 1.6) {
            user.setRating(Double.parseDouble(String.format("%.1f", user.getRating() - 0.2)));
        }
        if(user.getRating() - 0.2 <= 0 ) {
            user.setRating(0);
        }
        else {
            user.setRating(Double.parseDouble(String.format("%.1f", user.getRating() * 0.97)));
        }
    }

    public void challengeRating(int difficultyLevel, Integer id) {

        User user = userDao.getById(id);

        if(difficultyLevel <= 2) {
            user.setRating(user.getRating() * 1.01);
        }
        if(difficultyLevel <= 4) {
            user.setRating(user.getRating() * 1.02);
        }
        if(difficultyLevel <= 6) {
            user.setRating(user.getRating() * 1.03);
        }
        if(difficultyLevel <= 8) {
            user.setRating(user.getRating() * 1.04);
        }
        if(difficultyLevel <= 10) {
            user.setRating(user.getRating() * 1.05);
        }
    }


}
