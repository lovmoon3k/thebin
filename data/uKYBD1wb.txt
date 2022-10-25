1.	import java.util.Arrays;
2.	import java.util.Collections;
3.	import java.util.List;
4.	import java.util.Scanner;
5.	import java.util.stream.Collectors;
6.	 
7.	public class CoffeeLover {
8.	    public static void main(String[] args) {
9.	        Scanner scan = new Scanner(System.in);
10.	 
11.	        List<String> coffees = Arrays.stream(scan.nextLine().split("\\s+")).collect(Collectors.toList());
12.	        int commandsCount = Integer.parseInt(scan.nextLine());
13.	 
14.	        for (int i = 0; i < commandsCount; i++) {
15.	            String[] command = scan.nextLine().split("\\s+");
16.	 
17.	            switch (command[0]) {
18.	                case "Include":
19.	                    coffees.add(command[1]);
20.	                    break;
21.	                case "Remove":
22.	                    int removedCoffeesCnt = Integer.parseInt(command[2]);
23.	                    if (removedCoffeesCnt <= coffees.size()) {
24.	                        if (command[1].equals("first")) {
25.	                            for (int g = 0; g < removedCoffeesCnt; g++) {
26.	                                coffees.remove(0);
27.	                            }
28.	                        } else if (command[1].equals("last")) {
29.	                            for (int g = 0; g < removedCoffeesCnt; g++) {
30.	                                coffees.remove(coffees.size() - 1);
31.	                            }
32.	                        }
33.	                    }
34.	                    break;
35.	                case "Prefer":
36.	                    int firstIndex = Integer.parseInt(command[1]);
37.	                    int secondIndex = Integer.parseInt(command[2]);
38.	 
39.	                    try {
40.	                        String firstCoffee = coffees.get(firstIndex);
41.	                        coffees.set(firstIndex, coffees.get(secondIndex));
42.	                        coffees.set(secondIndex, firstCoffee);
43.	                    } catch (Exception e) {}
44.	                    break;
45.	                case "Reverse":
46.	                    Collections.reverse(coffees);
47.	                    break;
48.	            }
49.	        }
50.	        System.out.println("Coffees:");
51.	        for (String coffee:coffees) {
52.	            System.out.print(coffee + " ");
53.	        }
54.	    }
55.	}
