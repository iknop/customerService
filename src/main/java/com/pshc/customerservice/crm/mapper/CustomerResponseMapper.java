package com.pshc.customerservice.crm.mapper;


import com.pshc.customerservice.crm.dto.customerResponse.CRInsertRequestDto;
import com.pshc.customerservice.crm.dto.customerResponse.CRSelectResponseDto;
import com.pshc.customerservice.crm.dto.customerResponse.CRUpdateRequestDto;
import com.pshc.customerservice.crm.dto.customerResponseList.SearchInfoRequest;
import com.pshc.customerservice.crm.dto.customerResponseList.SearchInfoResponse;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface CustomerResponseMapper {
    List<SearchInfoResponse> getList(SearchInfoRequest request);
    CRSelectResponseDto getResponseById(int crId);
    void insertCustomerResponse(CRInsertRequestDto request);

    void updateCustomerResponse(CRUpdateRequestDto request);
}
