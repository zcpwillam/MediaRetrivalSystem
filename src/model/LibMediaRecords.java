package model;

/**
 * LibMediaRecords entity. @author MyEclipse Persistence Tools
 */

public class LibMediaRecords implements java.io.Serializable {

	// Fields

	private LibMediaRecordsId id;

	// Constructors

	/** default constructor */
	public LibMediaRecords() {
	}

	/** full constructor */
	public LibMediaRecords(LibMediaRecordsId id) {
		this.id = id;
	}

	// Property accessors

	public LibMediaRecordsId getId() {
		return this.id;
	}

	public void setId(LibMediaRecordsId id) {
		this.id = id;
	}

}