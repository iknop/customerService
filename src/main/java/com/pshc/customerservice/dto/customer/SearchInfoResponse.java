package com.pshc.customerservice.dto.customer;

public class SearchInfoResponse {
    private int totCnt;
    private int listNo;
    private int crID;
    private String customerCode;
    private String customerName;
    private String responseTitle;
    private String responseContents;
    private String createdDateTime;
    private String createUserName;

    public int getTotCnt() {
        return totCnt;
    }

    public void setTotCnt(int totCnt) {
        this.totCnt = totCnt;
    }

    public int getListNo() {
        return listNo;
    }

    public void setListNo(int listNo) {
        this.listNo = listNo;
    }

    public int getCrID() {
        return crID;
    }

    public void setCrID(int crID) {
        this.crID = crID;
    }

    public String getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(String customerCode) {
        this.customerCode = customerCode;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getResponseTitle() {
        return responseTitle;
    }

    public void setResponseTitle(String responseTitle) {
        this.responseTitle = responseTitle;
    }

    public String getResponseContents() {
        return responseContents;
    }

    public void setResponseContents(String responseContents) {
        this.responseContents = responseContents;
    }

    public String getCreatedDateTime() {
        return createdDateTime;
    }

    public void setCreatedDateTime(String createdDateTime) {
        this.createdDateTime = createdDateTime;
    }

    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName;
    }

    @Override
    public String toString() {
        return "SearchInfoResponse{" +
                "totCnt=" + totCnt +
                ", listNo=" + listNo +
                ", crID=" + crID +
                ", customerCode='" + customerCode + '\'' +
                ", customerName='" + customerName + '\'' +
                ", responseTitle='" + responseTitle + '\'' +
                ", responseContents='" + responseContents + '\'' +
                ", createdDateTime='" + createdDateTime + '\'' +
                ", createUserName='" + createUserName + '\'' +
                '}';
    }
}
