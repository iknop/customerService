package com.pshc.customerservice.test;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
public class Home {

    // Class data members
    public String name;
    public String duration;
    public String framework;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getFramework() {
        return framework;
    }

    public void setFramework(String framework) {
        this.framework = framework;
    }
}
