package com.pshc.customerservice.crm.dto.customerList;

public class DoctorListResponse {
    private String drId;
    private String drName;

    public String getDrId() {
        return drId;
    }

    public void setDrId(String drId) {
        this.drId = drId;
    }

    public String getDrName() {
        return drName;
    }

    public void setDrName(String drName) {
        this.drName = drName;
    }

    @Override
    public String toString() {
        return "DoctorListResponse{" +
                "drId=" + drId +
                ", drName=" + drName +
                '}';
    }
}
