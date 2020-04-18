package com.example.dashboard.resource;

import com.example.dashboard.model.Course;
import com.example.dashboard.service.CourseService;
import com.sun.jndi.toolkit.url.Uri;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:4200"})
@RestController
public class CourseResource {
    @Autowired
    private CourseService courseService;

    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username){
        return courseService.findAll();
    }

    @GetMapping("/instructors/{username}/courses/{id}")
    public Course getCourse(@PathVariable String username, @PathVariable long id){
        return courseService.findById(id);
    }

    @DeleteMapping("/instructors/{username}/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id){
        Course course = courseService.deleteById(id);
        if (course == null)
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.noContent().build();
    }

    @PutMapping("/instructors/{username}/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id, @RequestBody Course course){
       courseService.save(course);
       return new ResponseEntity<>(course, HttpStatus.OK);
    }


    @PostMapping("/instructors/{username}/courses")
    public ResponseEntity<Course> createCourse(@PathVariable String username, @RequestBody Course course){
        Course createdCourse = courseService.save(course);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdCourse.getId())
                .toUri();
        return ResponseEntity.created(uri).build();

    }
}
