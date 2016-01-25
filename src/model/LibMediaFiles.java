package model;

/**
 * LibMediaFiles entity. @author MyEclipse Persistence Tools
 */

public class LibMediaFiles implements java.io.Serializable {

	// Fields

	private LibMediaFilesId id;

	// Constructors

	/** default constructor */
	public LibMediaFiles() {
	}

	/** full constructor */
	public LibMediaFiles(LibMediaFilesId id) {
		this.id = id;
	}

	// Property accessors

	public LibMediaFilesId getId() {
		return this.id;
	}

	public void setId(LibMediaFilesId id) {
		this.id = id;
	}

}