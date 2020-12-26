import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.HashSet;
import java.util.List;

public class Des2Market {

    public static void main(String[] args) {

       	Scanner reader = new Scanner(System.in);
        
      	int cases = reader.nextInt();
      	
        for(int i = 0; i < cases + 1 ; i++) {
        
          String prodArriving = reader.nextLine();
          
          String[] newProducts = prodArriving.split(" ");

          newProducts = new HashSet<String>(Arrays.asList(newProducts))
                  .toArray(new String[0]);
          
          Arrays.sort(newProducts);
          
          List listFirst = Arrays.asList(newProducts);
          
          for (int j = 0; j < listFirst.size(); j++){
          System.out.printf(" %s", listFirst.get(j));
          }
          System.out.printf("\n");
          

        }
	  }
}