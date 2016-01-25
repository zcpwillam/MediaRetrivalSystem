package model;

import java.sql.Timestamp;

/**
 * LibMediaRecordsId entity. @author MyEclipse Persistence Tools
 */

public class LibMediaRecordsId implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String type;
	private String keyWords;
	private String enterUserId;
	private String enterUserName;
	private Timestamp enterTime;
	private String summary;

	// Constructors

	/** default constructor */
	public LibMediaRecordsId() {
	}

	/** full constructor */
	public LibMediaRecordsId(String id, String title, String type,
			String keyWords, String enterUserId, String enterUserName,
			Timestamp enterTime, String summary) {
		this.id = id;
		this.title = title;
		this.type = type;
		this.keyWords = keyWords;
		this.enterUserId = enterUserId;
		this.enterUserName = enterUserName;
		this.enterTime = enterTime;
		this.summary = summary;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getKeyWords() {
		return this.keyWords;
	}

	public void setKeyWords(String keyWords) {
		this.keyWords = keyWords;
	}

	public String getEnterUserId() {
		return this.enterUserId;
	}

	public void setEnterUserId(String enterUserId) {
		this.enterUserId = enterUserId;
	}

	public String getEnterUserName() {
		return this.enterUserName;
	}

	public void setEnterUserName(String enterUserName) {
		this.enterUserName = enterUserName;
	}

	public Timestamp getEnterTime() {
		return this.enterTime;
	}

	public void setEnterTime(Timestamp enterTime) {
		this.enterTime = enterTime;
	}

	public String getSummary() {
		return this.summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof LibMediaRecordsId))
			return false;
		LibMediaRecordsId castOther = (LibMediaRecordsId) other;

		return ((this.getId() == castOther.getId()) || (this.getId() != null
				&& castOther.getId() != null && this.getId().equals(
				castOther.getId())))
				&& ((this.getTitle() == castOther.getTitle()) || (this
						.getTitle() != null && castOther.getTitle() != null && this
						.getTitle().equals(castOther.getTitle())))
				&& ((this.getType() == castOther.getType()) || (this.getType() != null
						&& castOther.getType() != null && this.getType()
						.equals(castOther.getType())))
				&& ((this.getKeyWords() == castOther.getKeyWords()) || (this
						.getKeyWords() != null
						&& castOther.getKeyWords() != null && this
						.getKeyWords().equals(castOther.getKeyWords())))
				&& ((this.getEnterUserId() == castOther.getEnterUserId()) || (this
						.getEnterUserId() != null
						&& castOther.getEnterUserId() != null && this
						.getEnterUserId().equals(castOther.getEnterUserId())))
				&& ((this.getEnterUserName() == castOther.getEnterUserName()) || (this
						.getEnterUserName() != null
						&& castOther.getEnterUserName() != null && this
						.getEnterUserName()
						.equals(castOther.getEnterUserName())))
				&& ((this.getEnterTime() == castOther.getEnterTime()) || (this
						.getEnterTime() != null
						&& castOther.getEnterTime() != null && this
						.getEnterTime().equals(castOther.getEnterTime())))
				&& ((this.getSummary() == castOther.getSummary()) || (this
						.getSummary() != null && castOther.getSummary() != null && this
						.getSummary().equals(castOther.getSummary())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getId() == null ? 0 : this.getId().hashCode());
		result = 37 * result
				+ (getTitle() == null ? 0 : this.getTitle().hashCode());
		result = 37 * result
				+ (getType() == null ? 0 : this.getType().hashCode());
		result = 37 * result
				+ (getKeyWords() == null ? 0 : this.getKeyWords().hashCode());
		result = 37
				* result
				+ (getEnterUserId() == null ? 0 : this.getEnterUserId()
						.hashCode());
		result = 37
				* result
				+ (getEnterUserName() == null ? 0 : this.getEnterUserName()
						.hashCode());
		result = 37 * result
				+ (getEnterTime() == null ? 0 : this.getEnterTime().hashCode());
		result = 37 * result
				+ (getSummary() == null ? 0 : this.getSummary().hashCode());
		return result;
	}

}