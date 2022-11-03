package com.pshc.customerservice.controller.apiController;

import com.pshc.customerservice.dto.customerResponse.CRInsertRequestDto;
import com.pshc.customerservice.dto.customerResponse.CRSelectResponseDto;
import com.pshc.customerservice.dto.customerResponseList.SearchInfoRequest;
import com.pshc.customerservice.dto.customerResponseList.SearchInfoResponse;
import com.pshc.customerservice.service.CustomerResponseService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/api/board")
public class CustomerResponseApiController {
    // cutomerResponseList(인덱스 목록) + customerResponse(내용상세보기) 컨트롤러
    @Autowired
    CustomerResponseService service;

    public CustomerResponseApiController(CustomerResponseService service) {
        this.service = service;
    }

    /* 인덱스 페이지(서비스 목록) */
    @GetMapping("/list")
    public List<SearchInfoResponse> getList(SearchInfoRequest request) {
        return service.getList(request);
    }

    @GetMapping("/list/{customerCode}/{responseType}")
    public List<SearchInfoResponse> getList(SearchInfoRequest request, @PathVariable String customerCode, @PathVariable String responseType) {
        log.info(request);
        return service.getList(request);
    }


    /* 상세보기 페이지 */
    @GetMapping("/{crId}")
    public CRSelectResponseDto getResponseById(@PathVariable int crId) {
        log.info("getResponseById: " + service.getResponseById(crId));
        return service.getResponseById(crId);
    }

    /* 내용 등록 */
    @PostMapping("/write")
    public CRInsertRequestDto insertCustomerResponse(CRInsertRequestDto request) {
        service.insertCustomerResponse(request);
        log.info("service: insertCustomerResponse");
        return request;
    }
}

