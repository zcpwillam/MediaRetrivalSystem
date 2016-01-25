package model;

/**
 * Userdef entity. @author MyEclipse Persistence Tools
 */

public class Userdef implements java.io.Serializable {

	// Fields

	private String userId;
	private String password;
	private String name;

	// Constructors

	/** default constructor */
	public Userdef() {
	}

	/** minimal constructor */
	public Userdef(String userId) {
		this.userId = userId;
	}

	/** full constructor */
	public Userdef(String userId, String password, String name) {
		this.userId = userId;
		this.password = password;
		this.name = name;
	}

	// Property accessors

	public String getUserId() {
		return this.userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}