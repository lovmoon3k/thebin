package programmingBasics;

import java.util.Scanner;

public class FruitShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fruit = scanner.nextLine();
        String day = scanner.nextLine();
        double price = 0.0;
        int num = Integer.parseInt(scanner.nextLine());
        boolean isValid = (fruit.equals("banana") || fruit.equals("apple") ||
                fruit.equals("orange") || fruit.equals("grapefruit") ||
                fruit.equals("kiwi") || fruit.equals("pineapple")
                || fruit.equals("grapes") || day.equals("Monday")
                || day.equals("Tuesday") || day.equals("Wednesday")
                || day.equals("Thursday") || day.equals("Friday")
                || day.equals("Saturday") || day.equals("Sunday"));


        if (fruit.equals("banana")) {
            if (day.equals("Monday") || day.equals("Tuesday")
                    || day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 2.50;

            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 2.70;
            }
        } else if (fruit.equals("apple")) {
            if (day.equals("Monday") || day.equals("Tursday") ||
                    day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 1.20;
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 1.25;
            }
        } else if (fruit.equals("orange")) {
            if (day.equals("Monday") || day.equals("Tuesday") ||
                    day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 0.85;
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 0.90;
            }

        } else if (fruit.equals("grapefruit")) {
            if (day.equals("Monday") || day.equals("Tuesday") ||
                    day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 1.45;
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 1.60;
            }
        } else if (fruit.equals("kiwi")) {
            if (day.equals("Monday") || day.equals("Tuesday")
                    || day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 2.70;
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 3.00;
            }
        } else if (fruit.equals("pineapple")) {
            if (day.equals("Monday") || day.equals("Tuesday") ||
                    day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 5.50;
            
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 5.60;
            }
        } else if (fruit.equals("grapes")) {
            if (day.equals("Monday") || day.equals("Tuesday") ||
                    day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 3.85;
            
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 4.20;
            }

            if (isValid = false) {
                System.out.println("error");
            } else {

                System.out.println(price);

            }
        }
    }
}











