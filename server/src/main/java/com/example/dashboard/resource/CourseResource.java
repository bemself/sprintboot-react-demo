package com.example.dashboard.resource;

import com.example.dashboard.model.Course;
import com.example.dashboard.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:4200"})
@RestController
public class CourseResource {
    @Autowired
    private CourseService courseService;

    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses(){
        return courseService.findAll();
    }
}
