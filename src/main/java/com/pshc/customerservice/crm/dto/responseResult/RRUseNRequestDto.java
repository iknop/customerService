package com.pshc.customerservice.crm.dto.responseResult;

public class RRUseNRequestDto {
    private int rrId;
    private String useYN;
    private String loginId;
    private String successYN;
    private String  errorMessage;

    public int getRrId() {
        return rrId;
    }

    public void setRrId(int rrId) {
        this.rrId = rrId;
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
        return "RRUseNRequestDto{" +
                "rrId=" + rrId +
                ", useYN='" + useYN + '\'' +
                ", loginId='" + loginId + '\'' +
                ", successYN='" + successYN + '\'' +
                ", errorMessage='" + errorMessage + '\'' +
                '}';
    }
}
