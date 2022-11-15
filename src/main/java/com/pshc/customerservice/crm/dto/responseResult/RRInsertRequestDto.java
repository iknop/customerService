package com.pshc.customerservice.crm.dto.responseResult;

public class RRInsertRequestDto {
    private int crId;
    private String resultContents;
    private String loginId;
    private String successYN;
    private String errorMessage;

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
        return "RRInsertRequestDto{" +
                "crId=" + crId +
                ", resultContents='" + resultContents + '\'' +
                ", loginId='" + loginId + '\'' +
                ", successYN='" + successYN + '\'' +
                ", errorMessage='" + errorMessage + '\'' +
                '}';
    }
}
