package com.pshc.customerservice.local.dto.userAccount;

public class UserLoginResponseDto {
    private String userLoginId;
    private String userName;
    private String nickname;
    private String emailAddress;
    private String userPwd;
    private int phoneNumber;
    private String homeAddress;


    // 공백값들 trim()
    public String getUserLoginId() {
        return userLoginId.trim();
    }

    public void setUserLoginId(String userLoginId) {
        this.userLoginId = userLoginId.trim();
    }

    public String getUserName() {
        return userName.trim();
    }

    public void setUserName(String userName) {
        this.userName = userName.trim();
    }

    public String getNickname() {
        return nickname.trim();
    }

    public void setNickname(String nickname) {
        this.nickname = nickname.trim();
    }

    public String getEmailAddress() {
        return emailAddress.trim();
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress.trim();
    }

    public String getUserPwd() {
        return userPwd.trim();
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd.trim();
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getHomeAddress() {
        return homeAddress.trim();
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress.trim();
    }

    @Override
    public String toString() {
        return "UserLoginResponseDto{" +
                "userLoginId='" + userLoginId + '\'' +
                ", userName='" + userName + '\'' +
                ", nickname='" + nickname + '\'' +
                ", emailAddress='" + emailAddress + '\'' +
                ", userPwd='" + userPwd + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", homeAddress='" + homeAddress + '\'' +
                '}';
    }
}
