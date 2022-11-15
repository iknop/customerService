package com.pshc.customerservice.crm.controller.apiController;

import com.pshc.customerservice.crm.dto.customerList.DoctorListResponse;
import com.pshc.customerservice.crm.dto.customerList.HospitalListResponse;
import com.pshc.customerservice.crm.service.CustomerListService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/api/cs/")
public class CustomerListApiController {
    // 고객명 리스트 컨트롤러
    @Autowired
    CustomerListService service;

    public CustomerListApiController(CustomerListService service){
        this.service = service;
    }

    @GetMapping("/hospitalList")
    public List<HospitalListResponse> getHospitalList(){
        log.info(service.getHospitalList());
        return service.getHospitalList();
    }
    @GetMapping("/doctorList")
    public List<DoctorListResponse> getDoctorList(){
        log.info(service.getDoctorList());
        return service.getDoctorList();
    }

}

