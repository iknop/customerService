package com.pshc.customerservice.local.dto.userAccount;

public class UserLoginRequestDto {
    private String userLoginId;
    private String userPwd;
    private int resultCode;

    public String getUserLoginId() {
        return userLoginId;
    }

    public void setUserLoginId(String userLoginId) {
        this.userLoginId = userLoginId;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }

    public int getResultCode() {
        return resultCode;
    }

    public void setResultCode(int resultCode) {
        this.resultCode = resultCode;
    }

    @Override
    public String toString() {
        return "UserLoginRequestDto{" +
                "userLoginId='" + userLoginId + '\'' +
                ", userPwd='" + userPwd + '\'' +
                ", resultCode=" + resultCode +
                '}';
    }
}
