package com.pshc.customerservice.service;

import com.pshc.customerservice.dto.customerResponseList.SearchInfoRequest;
import com.pshc.customerservice.dto.customerResponseList.SearchInfoResponse;
import com.pshc.customerservice.mapper.CustomerListMapper;
import com.pshc.customerservice.mapper.CustomerResponseListMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
public class CustomerResponseListService {
    @Autowired
    CustomerResponseListMapper mapper;



}
