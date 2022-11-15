package com.pshc.customerservice.local.controller;

import com.pshc.customerservice.local.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    // 회원가입 페이지
    @GetMapping("/sign-in")
    public String signIn(){
        return "user/signIn";
    }
}
