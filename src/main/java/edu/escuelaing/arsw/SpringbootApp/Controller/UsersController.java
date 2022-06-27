package edu.escuelaing.arsw.SpringbootApp.Controller;

import edu.escuelaing.arsw.SpringbootApp.Services.serviceColor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/tbInteractivo")



public class UsersController {
    @Autowired
    serviceColor colors;

    @GetMapping("/getInfo")
    public ResponseEntity<?> colorsInUse(){
        return new ResponseEntity<>(colors.getColors(), HttpStatus.ACCEPTED);
    }

    @PutMapping("/setInfo")
    public ResponseEntity<?> addColorInUse(@RequestParam(value = "color") String Color){
        System.out.println(Color);
        colors.addColor(Color);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }



}
