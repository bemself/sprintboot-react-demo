package com.example.dashboard.service;

import com.example.dashboard.model.Course;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {
    public static List<Course> courses = new ArrayList<>();
    public static long  counter;
    static {
        courses.add(new Course(++counter, "demo", "learn java"));
        courses.add(new Course(++counter, "demo", "learn js"));
        courses.add(new Course(++counter, "demo", "learn react"));

    }

    public List<Course> findAll(){
        return courses;
    }
}
