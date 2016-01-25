package model;

/**
 * MediaRecords entity. @author MyEclipse Persistence Tools
 */

public class MediaRecords implements java.io.Serializable {

	// Fields

	private MediaRecordsId id;

	// Constructors

	/** default constructor */
	public MediaRecords() {
	}

	/** full constructor */
	public MediaRecords(MediaRecordsId id) {
		this.id = id;
	}

	// Property accessors

	public MediaRecordsId getId() {
		return this.id;
	}

	public void setId(MediaRecordsId id) {
		this.id = id;
	}

}