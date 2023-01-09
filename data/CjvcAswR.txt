package ProgrammingBasics2;

import java.util.Scanner;

public class PetShop {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        int foodDog = Integer.parseInt(scanner.nextLine());
        int foodCat = Integer.parseInt(scanner.nextLine());
        double oneFoodDog=foodDog*2.50;
        double oneFoodCat=foodCat*4;
        double sum=oneFoodCat+oneFoodDog;
        System.out.printf("%.1f lv",sum);
    }
}
