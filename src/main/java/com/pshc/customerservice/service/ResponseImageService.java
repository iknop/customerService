package com.pshc.customerservice.service;//package com.hestoryboards.service;
//
//import com.hestoryboards.dto.responseImage.ResponseImageInsertDto;
//import lombok.RequiredArgsConstructor;
//import lombok.Value;
//import lombok.extern.log4j.Log4j2;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.UUID;
//
//@Log4j2
//@RequiredArgsConstructor //final 생성자 주입
//@Service
//public class ResponseImageService {
//
////    @Value("${file.dir}")
//    private String fileDir;
//
//
//    private final ResponseImageInsertDto responseDto;
//
//    public Long saveFile(MultipartFile file) throws IOException {
//        if (file.isEmpty()) {
//            return null;
//        }
//        String originalName = file.getOriginalFilename();
//        String uuid = UUID.randomUUID().toString();
//        String extension = originalName.substring(originalName.lastIndexOf("."));
//        String savedName = uuid + extension;
//        String savedPath = fileDir + savedName;
//
//
//    }
//
//
//
//}
//
