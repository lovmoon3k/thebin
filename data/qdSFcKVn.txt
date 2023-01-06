12.	Търговски комисионни
Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите s:
Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
Sofia	5%	7%	8%	12%
Varna	4.5%	7.5%	10%	13%
Plovdiv	5.5%	8%	12%	14.5%
Напишете конзолна програма, която чете име на град (текст) и обем на продажби (реално число) , въведени от потребителя, и изчислява и извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 
Примерен вход и изход
вход	изход		вход	изход		вход	изход		вход	изход
Sofia
1500	120.00		Plovdiv
499.99	27.50		Varna
3874.50	387.45		Kaspichan
-50	error



package ProgrammingBasics2;

import java.util.Scanner;

public class TradeCommissions {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String city = scanner.nextLine();
        double sales = Double.parseDouble(scanner.nextLine());
        double commission = 0.0;

        switch (city) {
            case "Sofia":
                if (sales >= 0 && sales <= 500) {
                    commission = sales - (sales * 0.95);

                } else if (sales > 500 && sales <= 1000) {
                    commission = sales - (sales * 0.93);
                } else if (sales > 1000 && sales <= 10000) {
                    commission = sales - (sales * 0.92);
                } else if (sales > 10000) {
                    commission = sales - (sales * 0.88);
                }
                break;

            case "Varna":
                if (sales >= 0 && sales <= 500) {
                    commission = sales - (sales * 4.5 / 100);

                } else if (sales > 500 && sales <= 1000) {
                    commission = sales - (sales * 7.5 / 100);
                } else if (sales > 1000 && sales <= 10000) {
                    commission = sales - (sales * 0.90);
                } else if (sales > 10000) {
                    commission = sales - (sales * 0.87);
                }
                break;

            case "Plovdiv":
                if (sales >= 0 && sales <= 500) {
                    commission = sales - (sales * 94.5 / 100);

                } else if (sales > 500 && sales <= 1000) {
                    commission = sales - (sales * 0.92);
                } else if (sales > 1000 && sales <= 10000) {
                    commission = sales - (sales * 0.88);
                } else if (sales > 10000) {
                    commission = sales - (sales * 14.5 / 100);
                }
                break;


            default:

                System.out.println("error");

        }
                System.out.printf("%.2f", commission);

        }

    }

