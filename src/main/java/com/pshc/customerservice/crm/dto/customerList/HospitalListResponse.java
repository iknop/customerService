package com.pshc.customerservice.crm.dto.customerList;

public class HospitalListResponse {
    private int hospitalCode;
    private String hospitalName;

    public int getHospitalCode() {
        return hospitalCode;
    }

    public void setHospitalCode(int hospitalCode) {
        this.hospitalCode = hospitalCode;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    @Override
    public String toString() {
        return"HospitalListResponse{" +
                "hospitalCode=" + hospitalCode +
                ", hospitalName=" + hospitalName +
                '}';
    }
}
