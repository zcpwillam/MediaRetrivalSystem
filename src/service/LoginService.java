package service;

import model.LoginModel;
import model.Userdef;

public abstract interface LoginService {
	public Userdef loginValidation(LoginModel logininfo);
}
