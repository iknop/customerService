package com.pshc.customerservice.crm.dto.customerResponse;

public class CRUpdateRequestDto {
    private int crId;
    private String customerCode;
    private String responseType;
    private String responseTitle;
    private String responseContents;
    private String loginId;
    private String useYN;
    private String successYN;
    private String errorMessage;

    public int getCrId() {
        return crId;
    }

    public void setCrId(int crId) {
        this.crId = crId;
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

    public String getUseYN() {
        return useYN;
    }

    public void setUseYN(String useYN) {
        this.useYN = useYN;
    }

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    public String getSuccessYN() {
        return successYN;
    }

    public void setSuccessYN(String successYN) {
        this.successYN = successYN;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public String toString() {
        return "CRUpdateRequestDto{" +
                "crId=" + crId +
                ", customerCode='" + customerCode + '\'' +
                ", responseType='" + responseType + '\'' +
                ", responseTitle='" + responseTitle + '\'' +
                ", responseContents='" + responseContents + '\'' +
                ", useYN='" + useYN + '\'' +
                ", loginId='" + loginId + '\'' +
                ", successYN='" + successYN + '\'' +
                ", errorMessage='" + errorMessage + '\'' +
                '}';
    }
}
