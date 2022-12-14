package com.pshc.customerservice.controller;

import com.pshc.customerservice.dto.customerResponse.CRSelectResponseDto;
import com.pshc.customerservice.dto.customerResponse.CRUpdateRequestDto;
import com.pshc.customerservice.dto.responseResult.RRListResponseDto;
import com.pshc.customerservice.service.CustomerResponseService;
import com.pshc.customerservice.service.ResponseResultService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@Controller
@RequestMapping("/")
public class CustomerResponseController {
    CustomerResponseService customerResponseService;
    ResponseResultService responseResultService;
    String LOGIN_ID = "admin";

    public CustomerResponseController(CustomerResponseService customerResponseService, ResponseResultService responseResultService) {
        this.customerResponseService = customerResponseService;
        this.responseResultService = responseResultService;
    }

    // 홈: 서비스 목록
    @GetMapping
    public String home(@RequestParam(defaultValue = "admin") String otherID, Model model) {
        log.info("page: home 인덱스 리스트");
        if (!otherID.equals(LOGIN_ID)) {
            LOGIN_ID = otherID;
        }
        model.addAttribute("LOGIN_ID", LOGIN_ID);
        return "customerResponse/index";
    }

    @GetMapping("hsy")
    public String home2() {
        log.info("page: home 인덱스 리스트");
        return "customerResponse/index_new";
    }

    // 내용상세보기 페이지
    @GetMapping("/board/{crId}")
    public String show(@PathVariable int crId, @RequestParam(defaultValue = "admin") String otherID, Model model) {
        CRSelectResponseDto dto = customerResponseService.getResponseById(crId);
        model.addAttribute("response", dto);
        if (!otherID.equals(LOGIN_ID)) {
            LOGIN_ID = otherID;
        }
        model.addAttribute("LOGIN_ID", LOGIN_ID);
        log.info(model.getAttribute("response").toString());
        return "customerResponse/show";
    }

    // 내용 등록 페이지
    @GetMapping("/board/write")
    public String write(@RequestParam(defaultValue = "admin") String otherID, Model model) {
        log.info("page: board > write 작성하기");
        if (!otherID.equals(LOGIN_ID)) {
            LOGIN_ID = otherID;
        }
        model.addAttribute("LOGIN_ID", LOGIN_ID);
        return "customerResponse/write";
    }

    // 내용수정 페이지
    @GetMapping("/board/{crID}/update")
    public String edit(@PathVariable int crID, @RequestParam(defaultValue = "admin") String otherID, Model model) {
        CRSelectResponseDto dto = customerResponseService.getResponseById(crID);
        model.addAttribute("response", dto);
        int listSize =  responseResultService.getResultList(crID).size();
        if (listSize > 0){
            model.addAttribute("responseResultIsMoreThanZero","Y");
        }
        if (!otherID.equals(LOGIN_ID)) {
            LOGIN_ID = otherID;
        }
        model.addAttribute("LOGIN_ID", LOGIN_ID);

        log.info("page: board > edit 수정하기");
        return "customerResponse/edit";
    }


}
