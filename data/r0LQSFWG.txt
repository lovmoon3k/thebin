package ProgrammingBasics2;

import java.util.Scanner;

public class VegetableMarket {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        double priceVegetable = Double.parseDouble(scanner.nextLine());
        double priceFruit = Double.parseDouble(scanner.nextLine());
        int allVegetable = Integer.parseInt(scanner.nextLine());
        int allFruit = Integer.parseInt(scanner.nextLine());
        double sumVegetable = priceVegetable*allVegetable;
        double sumFruit= priceFruit*allFruit;
        double result= (sumVegetable+sumFruit)/1.94;
        System.out.printf("%.2f",result);
    }
}
