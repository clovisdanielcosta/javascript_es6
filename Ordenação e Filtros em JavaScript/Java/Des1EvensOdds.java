import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Des1EvensOdds {

    public static void main(String[] args) {

        Scanner reader = new Scanner(System.in);
        
        int numbLength = reader.nextInt();
        var numbers = new ArrayList<Integer>();
        var evens = new ArrayList<Integer>();
        var odds = new ArrayList<Integer>();

        for (int i=0; i<numbLength; i++) {
          
          numbers.add(reader.nextInt());
        }
        
        for (int i=0; i<numbers.size(); i++) {
          
            if (numbers.get(i) % 2 == 0) {
          
             	evens.add(numbers.get(i));
          
            } else {
          
            	odds.add(numbers.get(i));
          
            }
        }
		
        Collections.sort(evens);
        
		    for (int i=0; i<evens.size(); i++) {
            System.out.println(evens.get(i));
        }
        
        Collections.sort(odds, Collections.reverseOrder());
  
        for (int i=0; i<odds.size(); i++) {
            System.out.println(odds.get(i));
        } 
	}
}