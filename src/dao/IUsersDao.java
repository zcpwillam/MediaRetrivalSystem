package dao;

import model.Userdef;

public abstract interface IUsersDao {
	public String addUsers(Userdef user);
	public Userdef validateUser(String username,String password);
	public Integer checkUser(String username);//检测用户名是否已存在，存在返回1，否则返回0.
}
