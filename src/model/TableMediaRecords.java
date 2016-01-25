package model;

/**
 * TableMediaRecords entity. @author MyEclipse Persistence Tools
 */

public class TableMediaRecords implements java.io.Serializable {

	// Fields

	private TableMediaRecordsId id;

	// Constructors

	/** default constructor */
	public TableMediaRecords() {
	}

	/** full constructor */
	public TableMediaRecords(TableMediaRecordsId id) {
		this.id = id;
	}

	// Property accessors

	public TableMediaRecordsId getId() {
		return this.id;
	}

	public void setId(TableMediaRecordsId id) {
		this.id = id;
	}

}