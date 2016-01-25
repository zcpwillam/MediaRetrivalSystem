package service.impl;

import dao.IUsersDao;
import model.LoginModel;
import model.Userdef;
import service.LoginService;

public class LoginServiceImpl extends BaseService implements LoginService {
	private IUsersDao userDao;
	public IUsersDao getUserDao() {
		return userDao;
	}
	public void setUserDao(IUsersDao userDao) {
		this.userDao = userDao;
	}
	@Override
	public Userdef loginValidation(LoginModel logininfo) {
		Userdef user=new Userdef();
		user=userDao.validateUser(logininfo.getUsername(), logininfo.getPassword());
		return user;
	}

}
