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

    public Course findById(long id){
        for (Course course : courses){
            if (course.getId().equals(id)){
                return course;
            }
        }
        return null;
    }

    public Course deleteById(long id){
        Course course = findById(id);
        if (course != null){
            courses.remove(course);
            return course;
        } else return null;
    }

    public Course updateById(long id, Course newCourse) {
        Course course = findById(id);
        if (course == null) return null;
        else {
            int index = courses.indexOf(course);
            courses.set(index, newCourse);
            return newCourse;
        }
    }

    public void save(Course course) {
        if (course.getId()!=-1 || course.getId()!=0){
            course.setId(++counter);
            courses.add(course);
        } else{
            deleteById(course.getId());
            courses.add(course);
        }
    }
}
