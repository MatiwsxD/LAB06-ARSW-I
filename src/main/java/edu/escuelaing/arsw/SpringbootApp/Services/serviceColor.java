package edu.escuelaing.arsw.SpringbootApp.Services;

import edu.escuelaing.arsw.SpringbootApp.Model.ColorsUsed;
import org.springframework.stereotype.Service;

@Service("sColor")

public class serviceColor {
    private ColorsUsed x = new ColorsUsed();

    public void addColor(String newColorUsed){
        x.addColor(newColorUsed);
    }
    public ColorsUsed getColors(){
        return x;
    }
}
