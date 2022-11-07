package com.pshc.customerservice.controller.apiController;

import com.pshc.customerservice.dto.responseResult.RRInsertRequestDto;
import com.pshc.customerservice.dto.responseResult.RRListResponseDto;
import com.pshc.customerservice.dto.responseResult.RRUpdateRequestDto;
import com.pshc.customerservice.dto.responseResult.RRUseNRequestDto;
import com.pshc.customerservice.service.ResponseResultService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

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
    //ResponseEntity<Object> : 반환값: successYN
    @PostMapping("/save")
    public ResponseEntity<Object> insertResult(RRInsertRequestDto requestDto) {
        service.insertResult(requestDto);
        log.info("insertResult(requestDto)");
        return ResponseEntity.ok().body(requestDto);
    }
    @PostMapping("/update")
    public ResponseEntity<Object> updateResult(RRUpdateRequestDto requestDto) {
        service.updateResult(requestDto);
        log.info("Api controller");
        return ResponseEntity.ok().body(requestDto);
    }
    @PostMapping("/delete")
    public ResponseEntity<Object> useNResult(RRUseNRequestDto requestDto){
        service.useNResult(requestDto);
        return ResponseEntity.ok().body(requestDto);
    }
}
