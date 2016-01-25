package service.impl;

import dao.IUsersDao;
import model.RegisterModel;
import model.Userdef;
import service.RegisterService;

public class RegisterServiceImpl implements RegisterService {
	private IUsersDao userDao;
	public IUsersDao getUserDao() {
		return userDao;
	}
	public void setUserDao(IUsersDao userDao) {
		this.userDao = userDao;
	}
	public Integer addUser(RegisterModel userinfo) {
		Userdef user=new Userdef();
		user.setUserId(userinfo.getUsername());
		user.setPassword(userinfo.getPassword());
		user.setName(userinfo.getName());
		Integer state=userDao.checkUser(user.getUserId());
		if(state==1)
			return 0;
		else{
			userDao.addUsers(user);
			return 1;
		}
	}

}
