package com.pshc.customerservice.service;

import com.pshc.customerservice.dto.customerResponse.CRInsertRequestDto;
import com.pshc.customerservice.dto.customerResponse.CRSelectResponseDto;
import com.pshc.customerservice.dto.customerResponse.CRUpdateRequestDto;
import com.pshc.customerservice.dto.customerResponseList.SearchInfoRequest;
import com.pshc.customerservice.dto.customerResponseList.SearchInfoResponse;
import com.pshc.customerservice.mapper.CustomerResponseMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
public class CustomerResponseService {
    @Autowired
    CustomerResponseMapper mapper;


    public CustomerResponseService(CustomerResponseMapper mapper) {
        this.mapper = mapper;
    }


    public List<SearchInfoResponse> getList(SearchInfoRequest request) {
        return mapper.getList(request);
    }

    public CRSelectResponseDto getResponseById(int crId) {
        log.info(mapper.getResponseById(crId));
        return mapper.getResponseById(crId);
    }

    public void insertCustomerResponse(CRInsertRequestDto request) {
        mapper.insertCustomerResponse(request);
        log.info("mapper.insertCustomerResponse(request)");
    }
    public void updateCustomerResponse(CRUpdateRequestDto request){
        log.info("updateCustomerResponse");
        mapper.updateCustomerResponse(request);
    }
}
