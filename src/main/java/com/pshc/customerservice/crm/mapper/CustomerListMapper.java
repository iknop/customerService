package com.pshc.customerservice.crm.mapper;


import com.pshc.customerservice.crm.dto.customerList.DoctorListResponse;
import com.pshc.customerservice.crm.dto.customerList.HospitalListResponse;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface CustomerListMapper {
    List<HospitalListResponse> getHospitalList();
    List<DoctorListResponse> getDoctorList();

}
