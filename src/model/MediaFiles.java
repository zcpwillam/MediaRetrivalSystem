package model;

/**
 * MediaFiles entity. @author MyEclipse Persistence Tools
 */

public class MediaFiles implements java.io.Serializable {

	// Fields

	private MediaFilesId id;

	// Constructors

	/** default constructor */
	public MediaFiles() {
	}

	/** full constructor */
	public MediaFiles(MediaFilesId id) {
		this.id = id;
	}

	// Property accessors

	public MediaFilesId getId() {
		return this.id;
	}

	public void setId(MediaFilesId id) {
		this.id = id;
	}

}