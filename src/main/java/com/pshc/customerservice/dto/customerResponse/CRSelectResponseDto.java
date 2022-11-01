package com.pshc.customerservice.dto.customerResponse;


public class CRSelectResponseDto {
    private int crID;
    private String customerCode;
    private String responseType;
    private String responseTitle;
    private String responseContents;
    private String reqFileYN;
    private String useYn;
    private String createDateTime;
    private String createUserCode;
    private String updateDateTime;
    private String updateUserCode;

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

    public String getResponseType() {
        return responseType;
    }

    public void setResponseType(String responseType) {
        this.responseType = responseType;
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

    public String getReqFileYN() {
        return reqFileYN;
    }

    public void setReqFileYN(String reqFileYN) {
        this.reqFileYN = reqFileYN;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getCreateDateTime() {
        return createDateTime;
    }

    public void setCreateDateTime(String createDateTime) {
        this.createDateTime = createDateTime;
    }

    public String getCreateUserCode() {
        return createUserCode;
    }

    public void setCreateUserCode(String createUserCode) {
        this.createUserCode = createUserCode;
    }

    public String getUpdateDateTime() {
        return updateDateTime;
    }

    public void setUpdateDateTime(String updateDateTime) {
        this.updateDateTime = updateDateTime;
    }

    public String getUpdateUserCode() {
        return updateUserCode;
    }

    public void setUpdateUserCode(String updateUserCode) {
        this.updateUserCode = updateUserCode;
    }

    @Override
    public String toString() {
        return "CRSelectResponseDto{" +
                "crID=" + crID +
                ", customerCode=" + customerCode + '\'' +
                ", responseType=" + responseType + '\'' +
                ", responseTitle=" + responseTitle + '\'' +
                ", responseContents=" + responseContents + '\'' +
                ", reqFileYN=" + reqFileYN + '\'' +
                ", useYn=" + useYn + '\'' +
                ", createDateTime=" + createDateTime + '\'' +
                ", createUserCode=" + createUserCode + '\'' +
                ", updateDateTime=" + updateDateTime + '\'' +
                ", updateUserCode=" + updateUserCode + '\'' +
                '}';

    }
}
