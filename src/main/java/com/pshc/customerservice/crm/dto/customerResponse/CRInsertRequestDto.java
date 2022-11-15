package com.pshc.customerservice.dto.customerResponse;

public class CRInsertRequestDto {
    private String customerCode;
    private String responseType; // 일반/프로그램 TODO: ENUM
    private String responseTitle;
    private String responseContents;
    private String loginId;
    // output
    private String successYN;
    private String errorMessage;

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
        return "CRInsertRequestDto{" +
                "customerCode='" + customerCode + '\'' +
                ", responseType='" + responseType + '\'' +
                ", responseTitle='" + responseTitle + '\'' +
                ", responseContents='" + responseContents + '\'' +
                ", loginId='" + loginId + '\'' +
                ", successYN='" + successYN + '\'' +
                ", errorMessage='" + errorMessage + '\'' +
                '}';
    }
}
