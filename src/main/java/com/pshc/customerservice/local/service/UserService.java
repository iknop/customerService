package com.pshc.customerservice.local.service;

import com.pshc.customerservice.local.dto.userAccount.UserAccountCreateRequestDto;
import com.pshc.customerservice.local.dto.userAccount.UserLoginRequestDto;
import com.pshc.customerservice.local.dto.userAccount.UserLoginResponseDto;
import com.pshc.customerservice.local.mapper.UserMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class UserService {
    @Autowired
    UserMapper mapper;

    public UserService(UserMapper mapper) {
        this.mapper = mapper;
    }

    //    회원가입
    public void createUser(UserAccountCreateRequestDto requestDto) {
        mapper.createUser(requestDto);
    }

    //    로그인 사용자 정보 불러오기
    public UserLoginResponseDto loginUser(UserLoginRequestDto requestDto) {
        log.info(mapper.getLoginUserInfo(requestDto));
        return mapper.getLoginUserInfo(requestDto);
    }

    //    로그인 실패/성공; 0=성공, -1=아이디 없음,-2= 아이디에 일치하지 않는 비밀번호
    public void checkLoginInfo(UserLoginRequestDto requestDto) {
        mapper.checkLoginInfo(requestDto);
    }
}

