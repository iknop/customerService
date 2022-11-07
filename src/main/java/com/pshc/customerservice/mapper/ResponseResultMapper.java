package com.pshc.customerservice.mapper;

import com.pshc.customerservice.dto.responseResult.RRInsertRequestDto;
import com.pshc.customerservice.dto.responseResult.RRListResponseDto;
import com.pshc.customerservice.dto.responseResult.RRUpdateRequestDto;
import com.pshc.customerservice.dto.responseResult.RRUseNRequestDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ResponseResultMapper {
    List<RRListResponseDto> getResultList(int crId);
    void insertResult(RRInsertRequestDto requestDto);
    void updateResult(RRUpdateRequestDto requestDto);
    void useNResult(RRUseNRequestDto requestDto);
}
