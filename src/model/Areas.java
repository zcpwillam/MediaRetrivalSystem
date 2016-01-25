package model;

/**
 * Areas entity. @author MyEclipse Persistence Tools
 */

public class Areas implements java.io.Serializable {

	// Fields

	private AreasId id;

	// Constructors

	/** default constructor */
	public Areas() {
	}

	/** full constructor */
	public Areas(AreasId id) {
		this.id = id;
	}

	// Property accessors

	public AreasId getId() {
		return this.id;
	}

	public void setId(AreasId id) {
		this.id = id;
	}

}