package model;

import java.sql.Timestamp;

/**
 * TableMediaRecordsId entity. @author MyEclipse Persistence Tools
 */

public class TableMediaRecordsId implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String keyWords;
	private String enterUserId;
	private String enterUserName;
	private Timestamp enterTime;
	private String summary;
	private String contentType;
	private String year;
	private String month;
	private String day;

	// Constructors

	/** default constructor */
	public TableMediaRecordsId() {
	}

	/** full constructor */
	public TableMediaRecordsId(String id, String title, String keyWords,
			String enterUserId, String enterUserName, Timestamp enterTime,
			String summary, String contentType, String year, String month,
			String day) {
		this.id = id;
		this.title = title;
		this.keyWords = keyWords;
		this.enterUserId = enterUserId;
		this.enterUserName = enterUserName;
		this.enterTime = enterTime;
		this.summary = summary;
		this.contentType = contentType;
		this.year = year;
		this.month = month;
		this.day = day;
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

	public String getContentType() {
		return this.contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getYear() {
		return this.year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getMonth() {
		return this.month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getDay() {
		return this.day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof TableMediaRecordsId))
			return false;
		TableMediaRecordsId castOther = (TableMediaRecordsId) other;

		return ((this.getId() == castOther.getId()) || (this.getId() != null
				&& castOther.getId() != null && this.getId().equals(
				castOther.getId())))
				&& ((this.getTitle() == castOther.getTitle()) || (this
						.getTitle() != null && castOther.getTitle() != null && this
						.getTitle().equals(castOther.getTitle())))
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
				&& ((this.getContentType() == castOther.getContentType()) || (this
						.getContentType() != null
						&& castOther.getContentType() != null && this
						.getContentType().equals(castOther.getContentType())))
				&& ((this.getYear() == castOther.getYear()) || (this.getYear() != null
						&& castOther.getYear() != null && this.getYear()
						.equals(castOther.getYear())))
				&& ((this.getMonth() == castOther.getMonth()) || (this
						.getMonth() != null && castOther.getMonth() != null && this
						.getMonth().equals(castOther.getMonth())))
				&& ((this.getDay() == castOther.getDay()) || (this.getDay() != null
						&& castOther.getDay() != null && this.getDay().equals(
						castOther.getDay())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getId() == null ? 0 : this.getId().hashCode());
		result = 37 * result
				+ (getTitle() == null ? 0 : this.getTitle().hashCode());
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
		result = 37
				* result
				+ (getContentType() == null ? 0 : this.getContentType()
						.hashCode());
		result = 37 * result
				+ (getYear() == null ? 0 : this.getYear().hashCode());
		result = 37 * result
				+ (getMonth() == null ? 0 : this.getMonth().hashCode());
		result = 37 * result
				+ (getDay() == null ? 0 : this.getDay().hashCode());
		return result;
	}

}