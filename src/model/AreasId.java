package model;

/**
 * AreasId entity. @author MyEclipse Persistence Tools
 */

public class AreasId implements java.io.Serializable {

	// Fields

	private String areaName;
	private Boolean continentFlag;
	private String continentAttr;
	private String remarks;

	// Constructors

	/** default constructor */
	public AreasId() {
	}

	/** full constructor */
	public AreasId(String areaName, Boolean continentFlag,
			String continentAttr, String remarks) {
		this.areaName = areaName;
		this.continentFlag = continentFlag;
		this.continentAttr = continentAttr;
		this.remarks = remarks;
	}

	// Property accessors

	public String getAreaName() {
		return this.areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public Boolean getContinentFlag() {
		return this.continentFlag;
	}

	public void setContinentFlag(Boolean continentFlag) {
		this.continentFlag = continentFlag;
	}

	public String getContinentAttr() {
		return this.continentAttr;
	}

	public void setContinentAttr(String continentAttr) {
		this.continentAttr = continentAttr;
	}

	public String getRemarks() {
		return this.remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof AreasId))
			return false;
		AreasId castOther = (AreasId) other;

		return ((this.getAreaName() == castOther.getAreaName()) || (this
				.getAreaName() != null && castOther.getAreaName() != null && this
				.getAreaName().equals(castOther.getAreaName())))
				&& ((this.getContinentFlag() == castOther.getContinentFlag()) || (this
						.getContinentFlag() != null
						&& castOther.getContinentFlag() != null && this
						.getContinentFlag()
						.equals(castOther.getContinentFlag())))
				&& ((this.getContinentAttr() == castOther.getContinentAttr()) || (this
						.getContinentAttr() != null
						&& castOther.getContinentAttr() != null && this
						.getContinentAttr()
						.equals(castOther.getContinentAttr())))
				&& ((this.getRemarks() == castOther.getRemarks()) || (this
						.getRemarks() != null && castOther.getRemarks() != null && this
						.getRemarks().equals(castOther.getRemarks())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getAreaName() == null ? 0 : this.getAreaName().hashCode());
		result = 37
				* result
				+ (getContinentFlag() == null ? 0 : this.getContinentFlag()
						.hashCode());
		result = 37
				* result
				+ (getContinentAttr() == null ? 0 : this.getContinentAttr()
						.hashCode());
		result = 37 * result
				+ (getRemarks() == null ? 0 : this.getRemarks().hashCode());
		return result;
	}

}