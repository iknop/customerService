package com.pshc.customerservice.controller.apiController;

import com.pshc.customerservice.dto.customer.SearchInfoRequest;
import com.pshc.customerservice.dto.customer.SearchInfoResponse;
import com.pshc.customerservice.service.CustomerListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/board")
public class CustomerResponseApiController {

    @Autowired
    CustomerListService service;

    public CustomerResponseApiController(CustomerListService service){
        this.service = service;
    }
    @GetMapping("/list")
    public List<SearchInfoResponse> getList(SearchInfoRequest request){
//        System.out.println("request="+request);
//        service.getList(request);
        return service.getList(request);
    }
}
