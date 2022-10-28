package com.pshc.customerservice.mapper;


import com.pshc.customerservice.dto.customer.SearchInfoRequest;
import com.pshc.customerservice.dto.customer.SearchInfoResponse;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface CustomerListMapper {


    List<SearchInfoResponse> getList(SearchInfoRequest request);
}
