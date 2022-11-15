package com.pshc.customerservice.crm.service;

import com.pshc.customerservice.crm.dto.customerList.DoctorListResponse;
import com.pshc.customerservice.crm.dto.customerList.HospitalListResponse;
import com.pshc.customerservice.crm.mapper.CustomerListMapper;
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

    public List<HospitalListResponse> getHospitalList() {
        log.info(customerListMapper.getHospitalList());
        return customerListMapper.getHospitalList();
    }

    public List<DoctorListResponse> getDoctorList() {
        log.info(customerListMapper.getDoctorList());
        return customerListMapper.getDoctorList();
    }


}
