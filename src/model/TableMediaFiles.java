package model;

/**
 * TableMediaFiles entity. @author MyEclipse Persistence Tools
 */

public class TableMediaFiles implements java.io.Serializable {

	// Fields

	private TableMediaFilesId id;

	// Constructors

	/** default constructor */
	public TableMediaFiles() {
	}

	/** full constructor */
	public TableMediaFiles(TableMediaFilesId id) {
		this.id = id;
	}

	// Property accessors

	public TableMediaFilesId getId() {
		return this.id;
	}

	public void setId(TableMediaFilesId id) {
		this.id = id;
	}

}