package edu.escuelaing.arsw.SpringbootApp.Model;

import java.util.ArrayList;

public class ColorsUsed {
    private ArrayList<String> ColorsInUse = new ArrayList<>();

    public ArrayList<String> getColorsInUse(){
        return ColorsInUse;
    }

    public void setColorsInUse(ArrayList<String> ColorsInUse){
        this.ColorsInUse = ColorsInUse;
    }
    public void addColor(String color){
        ColorsInUse.add(color);
    }
}
