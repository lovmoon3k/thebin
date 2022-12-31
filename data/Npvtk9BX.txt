package programmingBasics;

import java.util.Scanner;

public class FruitShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fruit = scanner.nextLine();
        String day = scanner.nextLine();
        double num = Double.parseDouble(scanner.nextLine());
        double price = 0.0;

        boolean isValid = (fruit.equals("banana") && fruit.equals("apple") &&
                fruit.equals("orange") && fruit.equals("grapefruit") &&
                fruit.equals("kiwi") && fruit.equals("pineapple")
                && fruit.equals("grapes") &&

                day.equals("Monday")
                && day.equals("Tuesday") && day.equals("Wednesday")
                && day.equals("Thursday") && day.equals("Friday")
                && day.equals("Saturday") && day.equals("Sunday"));

        if (isValid = false) {
            System.out.println("error");
        }
        if (fruit.equals("banana")) {
            if (day.equals("Monday") || day.equals("Tuesday")
                    || day.equals("Wednesday") || day.equals("Thursday") ||
                    day.equals("Friday")) {
                price = num * 2.50;

            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                price = num * 2.70;
            }

        }
        if (fruit.equals("apple")) {
            if (day.equals("Monday") || day.equals("Tuesday") ||
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

            } else if
            (day.equals("Saturday") || day.equals("Sunday")) {
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

        }
                System.out.printf("%.2f", price);
            }
        }






11.	Магазин за плодове
Магазин за плодове през работните дни работи на следните цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
Събота и неделя магазинът работи на по-високи цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
Напишете програма, която чете от конзолата плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (десетично число) , въведени от потребителя, и пресмята цената според цените от таблиците по-горе. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 
Примерен вход и изход
вход	изход		вход	изход		вход	изход		вход	изход		вход	изход
apple
Tuesday
2	2.40		orange
Sunday
3	2.70		kiwi
Monday
2.5	6.75		grapes
Saturday
0.5	2.10		tomato
Monday
0.5	error














