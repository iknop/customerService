package com.pshc.customerservice.local.mapper;

import com.pshc.customerservice.local.dto.userAccount.UserAccountCreateRequestDto;
import com.pshc.customerservice.local.dto.userAccount.UserLoginRequestDto;
import com.pshc.customerservice.local.dto.userAccount.UserLoginResponseDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserMapper {
    //회원가입
    void createUser(UserAccountCreateRequestDto requestDto);
    // 로그인한 사용자 정보
    UserLoginResponseDto getLoginUserInfo(UserLoginRequestDto requestDto);
    // 로그인 일치 정보
    void checkLoginInfo(UserLoginRequestDto requestDto);
}
