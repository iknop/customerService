package com.pshc.customerservice.crm.service;

import com.pshc.customerservice.crm.dto.responseResult.RRInsertRequestDto;
import com.pshc.customerservice.crm.dto.responseResult.RRListResponseDto;
import com.pshc.customerservice.crm.dto.responseResult.RRUpdateRequestDto;
import com.pshc.customerservice.crm.dto.responseResult.RRUseNRequestDto;
import com.pshc.customerservice.crm.mapper.ResponseResultMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
public class ResponseResultService {
    @Autowired
    ResponseResultMapper mapper;

    public ResponseResultService(ResponseResultMapper mapper) {
        this.mapper = mapper;
    }

    public List<RRListResponseDto> getResultList(int crId) {
//        log.info(mapper.getResultList(crId));
        return mapper.getResultList(crId);
    }

    public void insertResult(RRInsertRequestDto requestDto) {
        mapper.insertResult(requestDto);
       // log.info("svc");
    }
    public void updateResult(RRUpdateRequestDto requestDto) {
        mapper.updateResult(requestDto);
        log.info("svc");
    }

    public void useNResult(RRUseNRequestDto requestDto){
        mapper.useNResult(requestDto);
        log.info("useNResult");
    }
}
