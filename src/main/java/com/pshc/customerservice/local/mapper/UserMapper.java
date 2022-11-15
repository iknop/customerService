package com.pshc.customerservice.local.mapper;

import com.pshc.customerservice.local.dto.userAccount.UserAccountCreateRequestDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserMapper {
    void createUser(UserAccountCreateRequestDto requestDto);
}
