package com.pshc.customerservice.dto.responseResult;

public class RRListResponseDto {
    private int rrId;
    private int crId;
    private String resultContents;
    private String createDateTime;
    private String createUserName;

    public int getRrId() {
        return rrId;
    }

    public void setRrId(int rrId) {
        this.rrId = rrId;
    }

    public int getCrId() {
        return crId;
    }

    public void setCrId(int crId) {
        this.crId = crId;
    }

    public String getResultContents() {
        return resultContents;
    }

    public void setResultContents(String resultContents) {
        this.resultContents = resultContents;
    }

    public String getCreateDateTime() {
        return createDateTime;
    }

    public void setCreateDateTime(String createDateTime) {
        this.createDateTime = createDateTime;
    }

    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName;
    }

    @Override
    public String toString() {
        return "RRListResponseDto{" +
                "rrId=" + rrId +
                ", crId=" + crId +
                ", resultContents='" + resultContents + '\'' +
                ", createDateTime='" + createDateTime + '\'' +
                ", createUserName='" + createUserName + '\'' +
                '}';
    }
}
