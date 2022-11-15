package com.pshc.customerservice.mapper;


import com.pshc.customerservice.dto.customerResponse.CRInsertRequestDto;
import com.pshc.customerservice.dto.customerResponse.CRSelectResponseDto;
import com.pshc.customerservice.dto.customerResponse.CRUpdateRequestDto;
import com.pshc.customerservice.dto.customerResponseList.SearchInfoRequest;
import com.pshc.customerservice.dto.customerResponseList.SearchInfoResponse;
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
