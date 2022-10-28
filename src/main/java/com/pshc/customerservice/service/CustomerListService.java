package com.pshc.customerservice.service;

import com.pshc.customerservice.mapper.CustomerListMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class CustomerListService {
    @Autowired
    CustomerListMapper customerListMapper;



}
