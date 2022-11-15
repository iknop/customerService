package com.pshc.customerservice.local.controller.apiController;

import com.pshc.customerservice.local.dto.userAccount.UserAccountCreateRequestDto;
import com.pshc.customerservice.local.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/")
public class UserApiController {
    @Autowired
    UserService service;

    public UserApiController(UserService service) {
        this.service = service;
    }

    // 회원가입
    @PostMapping("/signIn")
    public ResponseEntity<Object> createUser(UserAccountCreateRequestDto requestDto) {
        service.createUser(requestDto);
        return ResponseEntity.ok().body(requestDto);
    }
}
