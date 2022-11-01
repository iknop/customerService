package com.pshc.customerservice.controller;

import com.pshc.customerservice.dto.customerResponse.CRSelectResponseDto;
import com.pshc.customerservice.service.CustomerResponseService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Log4j2
@Controller
@RequestMapping("/")
public class CustomerResponseController {
    @Autowired
    CustomerResponseService customerResponseService;
    // 홈: 서비스 목록
    @GetMapping
    public String home() {
        log.info("page: home 인덱스 리스트");
        return "customerResponse/index";
    }

    // 내용상세보기 페이지
    @GetMapping("/board/{crID}")
    public String show(@PathVariable int crID, Model model) {
        CRSelectResponseDto dto = customerResponseService.getResponseById(crID);
        model.addAttribute("response", dto);
        log.info("page: board > show 상세보기");
        return "customerResponse/show";
    }

    // 내용 등록 페이지
    @GetMapping("/board/write")
    public String write() {
        log.info("page: board > write 작성하기");
        return "customerResponse/write";
    }

    // 내용수정 페이지
    @GetMapping("/board/update/{bid}")
    public String editGet(/*@RequestParam Long bid*/) {

        log.info("page: board > edit 수정하기");
        return "customerResponse/edit";
    }

    @PostMapping("/board/update/{bid}")
    public String editPost(/*@RequestParam Long bid*/) {
        return "customerResponse/{bid}";
    }

}
