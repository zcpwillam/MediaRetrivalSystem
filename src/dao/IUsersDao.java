package dao;

import model.Userdef;

public abstract interface IUsersDao {
	public String addUsers(Userdef user);
	public Userdef validateUser(String username,String password);
}
