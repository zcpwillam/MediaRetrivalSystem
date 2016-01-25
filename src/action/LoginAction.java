package action;
import service.LoginService;
import model.LoginModel;
import model.Userdef;
public class LoginAction extends BaseAction {
	private LoginModel logininfo;
	private LoginService login;
	private Userdef user;
	public LoginModel getLogininfo() {
		return logininfo;
	}
	public void setLogininfo(LoginModel logininfo) {
		this.logininfo = logininfo;
	}
	public LoginService getLogin() {
		return login;
	}
	public void setLogin(LoginService login) {
		this.login = login;
	}
	public Userdef getUser() {
		return user;
	}
	public void setUser(Userdef user) {
		this.user = user;
	}
	public String login(){
		user=login.loginValidation(logininfo);
		return "success";
	}
	
}
