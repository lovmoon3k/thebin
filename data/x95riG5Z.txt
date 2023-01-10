package ProgrammingBasics2;

import java.util.Scanner;

public class TrainingLab {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        double lengthMeters = Double.parseDouble(scanner.nextLine());
        double widthMeters = Double.parseDouble(scanner.nextLine());
        double workPlace = 70*120;
       // double corridor=100;
        double lengthCentimeters = lengthMeters*100;
        double widthCentimeters=widthMeters*100;
        double corridor = 100;
        double sumWidth= Math.floor((widthCentimeters-corridor)/70);
        double sumLength =Math.floor(lengthCentimeters/120);
        double sum=sumLength*sumWidth-3;

        System.out.printf("%.0f",sum);

    }
}
