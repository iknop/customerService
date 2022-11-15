package com.pshc.customerservice.crm.controller.apiController;

import com.pshc.customerservice.crm.dto.customerResponse.CRInsertRequestDto;
import com.pshc.customerservice.crm.dto.customerResponse.CRSelectResponseDto;
import com.pshc.customerservice.crm.dto.customerResponse.CRUpdateRequestDto;
import com.pshc.customerservice.crm.dto.customerResponseList.SearchInfoRequest;
import com.pshc.customerservice.crm.dto.customerResponseList.SearchInfoResponse;
import com.pshc.customerservice.crm.service.CustomerResponseService;
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
        log.info("SearchInfoRequest : {}", request);
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
        log.info(request);
        return request;
    }

    @PostMapping("/{crId}/update")
    public CRUpdateRequestDto updateCustomerResponse(CRUpdateRequestDto request, @PathVariable int crId){
        service.updateCustomerResponse(request);
        return request;
    }
}

