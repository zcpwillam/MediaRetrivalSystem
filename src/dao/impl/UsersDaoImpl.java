package dao.impl;

import java.util.ArrayList;

import org.springframework.orm.hibernate3.HibernateTemplate;

import model.Userdef;
import dao.IUsersDao;

public class UsersDaoImpl extends BaseDao implements IUsersDao  {

	@Override
	public String addUsers(Userdef user) {
		HibernateTemplate tmp=this.getHibernateTemplate();
		tmp.setFlushMode(HibernateTemplate.FLUSH_EAGER);
		tmp.save(user);
		return user.getUserId();
	}

	@Override
	public Userdef validateUser(String username, String password) {
		String query0=" from Userdef as u where u.userId='"+username+"' and u.password='"+password+"'";
		ArrayList<Userdef> us=(ArrayList<Userdef>)this.getHibernateTemplate().find(query0);
		if(us.size()>0)
			return us.get(0);
		else return null;

	}

	@Override
	public Integer checkUser(String username) {
		String query0="from Userdef as u where u.userId=?";
		ArrayList<Userdef> us=(ArrayList<Userdef>)this.getHibernateTemplate().find(query0, username);
		if(us.size()>0)
			return 1;
		else 
			return 0;
	}

}
