package com.pshc.customerservice.controller.apiController;

import com.pshc.customerservice.dto.responseResult.RRInsertRequestDto;
import com.pshc.customerservice.dto.responseResult.RRListResponseDto;
import com.pshc.customerservice.dto.responseResult.RRUpdateRequestDto;
import com.pshc.customerservice.service.ResponseResultService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/api/result")
public class ResponseResultApiController {
    // response result(처리내용)

    @Autowired
    ResponseResultService service;

    public ResponseResultApiController(ResponseResultService service) {
        this.service = service;
    }

    @GetMapping("/{crId}/list")
    public List<RRListResponseDto> getResultList(@PathVariable int crId) {
        log.info(service.getResultList(crId));
        return service.getResultList(crId);
    }
    @PostMapping("/save")
    public void insertResult(RRInsertRequestDto requestDto) {
        service.insertResult(requestDto);
        log.info("insertResult(requestDto)");
    }
    @GetMapping("/update")
    public void upateResult(RRUpdateRequestDto requestDto) {
        service.updateResult(requestDto);
        log.info("Api controller");
    }
}
