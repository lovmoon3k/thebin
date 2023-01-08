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

