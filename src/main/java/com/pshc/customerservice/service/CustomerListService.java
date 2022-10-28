package com.pshc.customerservice.service;

import com.pshc.customerservice.dto.customer.SearchInfoRequest;
import com.pshc.customerservice.dto.customer.SearchInfoResponse;
import com.pshc.customerservice.mapper.CustomerListMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
public class CustomerListService {
    @Autowired
    CustomerListMapper customerListMapper;

    public CustomerListService(CustomerListMapper customerListMapper) {
        this.customerListMapper = customerListMapper;
    }


    public List<SearchInfoResponse> getList(SearchInfoRequest request) {
        return customerListMapper.getList(request);
    }
}
