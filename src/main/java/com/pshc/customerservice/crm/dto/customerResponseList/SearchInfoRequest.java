package com.pshc.customerservice.dto.customerResponseList;

public class SearchInfoRequest {
    private String customerCode;
    private String responseType;
    private int currentIndexNo;
    private int pagingSize;

    public String getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(String customerCode) {
        this.customerCode = customerCode;
    }

    public String getResponseType() {
        return responseType;
    }

    public void setResponseType(String responseType) {
        this.responseType = responseType;
    }

    public int getCurrentIndexNo() {
        return currentIndexNo;
    }

    public void setCurrentIndexNo(int currentIndexNo) {
        this.currentIndexNo = currentIndexNo;
    }

    public int getPagingSize() {
        return pagingSize;
    }

    public void setPagingSize(int pagingSize) {
        this.pagingSize = pagingSize;
    }

    @Override
    public String toString() {
        return "SearchInfoRequest{" +
                "customerCode=" + customerCode + '\'' +
                ", responseType=" + responseType + '\'' +
                ", currentIndexNo=" + currentIndexNo +'\'' +
                ", pagingSize=" + pagingSize +
                '}';
    }
}
