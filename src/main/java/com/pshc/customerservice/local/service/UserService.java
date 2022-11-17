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

    public void createUser(UserAccountCreateRequestDto requestDto) {
        mapper.createUser(requestDto);
    }

    public UserLoginResponseDto loginUser(UserLoginRequestDto requestDto){
        log.info(mapper.getLoginUserInfo(requestDto));
        return mapper.getLoginUserInfo(requestDto);
    }
    public void checkLoginInfo(UserLoginRequestDto requestDto){
        mapper.checkLoginInfo(requestDto);
    }
}

