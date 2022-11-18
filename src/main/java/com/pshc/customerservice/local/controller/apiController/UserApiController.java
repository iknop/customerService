package com.pshc.customerservice.local.controller.apiController;

import com.pshc.customerservice.local.dto.userAccount.UserAccountCreateRequestDto;
import com.pshc.customerservice.local.dto.userAccount.UserLoginRequestDto;
import com.pshc.customerservice.local.dto.userAccount.UserLoginResponseDto;
import com.pshc.customerservice.local.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequestMapping("/api/user/")
public class UserApiController {
    @Autowired
    UserService service;

    public UserApiController(UserService service) {
        this.service = service;
    }

    // 회원가입

    @PostMapping("/signUp")
    public ResponseEntity<Object> createUser(UserAccountCreateRequestDto requestDto, Model model) {
        service.createUser(requestDto);

        return ResponseEntity.ok().body(requestDto);
    }

    // 로그인
    @PostMapping("/login")
    public UserLoginResponseDto loginUser(UserLoginRequestDto requestDto) {
//        log.info(service.loginUser(requestDto));
        return service.loginUser(requestDto);
    }

    @PostMapping("/check-Login")
    public int checkLoginInfo(UserLoginRequestDto requestDto) {
        log.info("RequestDto : {}", requestDto);
        service.checkLoginInfo(requestDto);
        return requestDto.getResultCode();
    }
}
