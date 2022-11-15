package com.pshc.customerservice.crm.dto.responseResult;

public class RRUpdateRequestDto {
    private int rrId;
    private String resultContents;
    private String loginId;
    private String successYN;
    private String  errorMessage;

    public int getRrId() {
        return rrId;
    }

    public void setRrId(int rrId) {
        this.rrId = rrId;
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

    public String getSucessYN() {
        return successYN;
    }

    public void setSucessYN(String sucessYN) {
        this.successYN = sucessYN;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public String toString() {
        return "RRUpdateRequestDto{" +
                "rrId=" + rrId +
                ", resultContents='" + resultContents + '\'' +
                ", loginId='" + loginId + '\'' +
                ", successYN='" + successYN + '\'' +
                ", errorMessage='" + errorMessage + '\'' +
                '}';
    }
}
