package dao.impl;

import java.util.ArrayList;

import model.Userdef;
import dao.IUsersDao;

public class UsersDaoImpl extends BaseDao implements IUsersDao  {

	@Override
	public String addUsers(Userdef user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Userdef validateUser(String username, String password) {
		String query0=" from Userdef as u where u.name='"+username+"' and u.password='"+password+"'";
		ArrayList<Userdef> us=(ArrayList<Userdef>)this.getHibernateTemplate().find(query0);
		if(us.size()>0)
			return us.get(0);
		else return null;

	}

}
