package com.pshc.customerservice.dto.customerResponse;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CustomerResponseInsertDto {
    private String customerCode;
    private String responseType; // 일반/프로그램 TODO: ENUM
    private String responseContents;
    private String reqFileYN; // 첨부파일 유무
    private String useYN;
    private String createDateTime;
    private String createUserCode;


    @Builder
    public CustomerResponseInsertDto(String customerCode, String responseType, String responseContents, String reqFileYN, String createUserCode) {
        this.customerCode = customerCode;
        this.responseType = responseType;
        this.responseContents = responseContents;
        this.reqFileYN = reqFileYN;
        this.useYN = "Y";
        this.createUserCode = createUserCode;
    }

}
