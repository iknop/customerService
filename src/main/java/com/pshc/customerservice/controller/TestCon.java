package com.pshc.customerservice.controller;
// importing required classes

import java.util.Arrays;
import java.util.List;


import com.pshc.customerservice.test.Home;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Log4j2
@Controller
public class TestCon {
    @RequestMapping(value = "/test")

    public String viewHome(Model model)
    {

        // Creating an instance of Home class
        // inside this method
        Home home = new Home();
        model.addAttribute("home", home);

        return "customerResponse/cBoxTest";
    }

    // Annotation
    @ModelAttribute("javaFramworks")

    // Method
    public List<String> javaFramworksList()
    {
        List<String> framework = Arrays.asList(
                "Apache Struts", "Spring", "Hibernate",
                "Grails", "Java Server Faces");

        return framework;
    }

    // Annotation
    @PostMapping(value = "/submit")

    // Method
    public String
    submit(@ModelAttribute("home") Home home)
    {
        log.info("submit: "+ home.getName() +home.getDuration()+ home.getFramework());

        return "customerResponse/cBoxSummary";
    }

}
