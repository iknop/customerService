package com.pshc.customerservice.crm.mapper;

import com.pshc.customerservice.crm.dto.userAccount.UserAccountCreateRequestDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserMapper {
    void createUser(UserAccountCreateRequestDto requestDto);
}
