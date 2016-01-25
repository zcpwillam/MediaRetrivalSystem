package action;

import model.RegisterModel;
import service.RegisterService;

public class RegisterAction extends BaseAction{
 private RegisterService register;
 private RegisterModel userinfo;

public RegisterService getRegister() {
	return register;
}
public void setRegister(RegisterService register) {
	this.register = register;
}
public RegisterModel getUserinfo() {
	return userinfo;
}
public void setUserinfo(RegisterModel userinfo) {
	this.userinfo = userinfo;
}

public String register(){
	Integer state=register.addUser(userinfo);
	if(state==1)
		return "success";
	else return "fail";
}
}
