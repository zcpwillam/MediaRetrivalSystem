package model;

import java.sql.Timestamp;

/**
 * MediaRecordsId entity. @author MyEclipse Persistence Tools
 */

public class MediaRecordsId implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String type;
	private String keyWords;
	private String enterUserId;
	private String enterUserName;
	private Timestamp enterTime;
	private String summary;
	private String area;
	private String contentType;

	// Constructors

	/** default constructor */
	public MediaRecordsId() {
	}

	/** full constructor */
	public MediaRecordsId(String id, String title, String type,
			String keyWords, String enterUserId, String enterUserName,
			Timestamp enterTime, String summary, String area, String contentType) {
		this.id = id;
		this.title = title;
		this.type = type;
		this.keyWords = keyWords;
		this.enterUserId = enterUserId;
		this.enterUserName = enterUserName;
		this.enterTime = enterTime;
		this.summary = summary;
		this.area = area;
		this.contentType = contentType;
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

	public String getArea() {
		return this.area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getContentType() {
		return this.contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof MediaRecordsId))
			return false;
		MediaRecordsId castOther = (MediaRecordsId) other;

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
						.getSummary().equals(castOther.getSummary())))
				&& ((this.getArea() == castOther.getArea()) || (this.getArea() != null
						&& castOther.getArea() != null && this.getArea()
						.equals(castOther.getArea())))
				&& ((this.getContentType() == castOther.getContentType()) || (this
						.getContentType() != null
						&& castOther.getContentType() != null && this
						.getContentType().equals(castOther.getContentType())));
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
		result = 37 * result
				+ (getArea() == null ? 0 : this.getArea().hashCode());
		result = 37
				* result
				+ (getContentType() == null ? 0 : this.getContentType()
						.hashCode());
		return result;
	}

}