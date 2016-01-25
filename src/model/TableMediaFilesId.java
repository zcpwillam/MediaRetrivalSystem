package model;

/**
 * TableMediaFilesId entity. @author MyEclipse Persistence Tools
 */

public class TableMediaFilesId implements java.io.Serializable {

	// Fields

	private String idRef;
	private String filePath;
	private String fileType;

	// Constructors

	/** default constructor */
	public TableMediaFilesId() {
	}

	/** full constructor */
	public TableMediaFilesId(String idRef, String filePath, String fileType) {
		this.idRef = idRef;
		this.filePath = filePath;
		this.fileType = fileType;
	}

	// Property accessors

	public String getIdRef() {
		return this.idRef;
	}

	public void setIdRef(String idRef) {
		this.idRef = idRef;
	}

	public String getFilePath() {
		return this.filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public String getFileType() {
		return this.fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof TableMediaFilesId))
			return false;
		TableMediaFilesId castOther = (TableMediaFilesId) other;

		return ((this.getIdRef() == castOther.getIdRef()) || (this.getIdRef() != null
				&& castOther.getIdRef() != null && this.getIdRef().equals(
				castOther.getIdRef())))
				&& ((this.getFilePath() == castOther.getFilePath()) || (this
						.getFilePath() != null
						&& castOther.getFilePath() != null && this
						.getFilePath().equals(castOther.getFilePath())))
				&& ((this.getFileType() == castOther.getFileType()) || (this
						.getFileType() != null
						&& castOther.getFileType() != null && this
						.getFileType().equals(castOther.getFileType())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getIdRef() == null ? 0 : this.getIdRef().hashCode());
		result = 37 * result
				+ (getFilePath() == null ? 0 : this.getFilePath().hashCode());
		result = 37 * result
				+ (getFileType() == null ? 0 : this.getFileType().hashCode());
		return result;
	}

}