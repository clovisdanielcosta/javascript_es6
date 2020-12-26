import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Des4BankStack {

	public static void main(String[] args) {

		Scanner reader = new Scanner(System.in);

		int cases = reader.nextInt();
		
		for (int i = 0; i < cases; i++) {
		
		
			List<Integer> arrived = new ArrayList<>();
		  List<Integer> orderedStack = new ArrayList<>();
			int smsNumbers = reader.nextInt();
			
			reader.nextLine();
			
			String[] arriving = reader.nextLine().split(" ");
			
			for (int j = 0; j < arriving.length; j++) {
				arrived.add(Integer.parseInt(arriving[j]));
			}
			
			orderedStack.addAll(arrived);
			orderedStack.sort(Collections.reverseOrder());
			
			int stillInPosition = 0;
			
			for (int j = 0; j < smsNumbers; j++) {
				if(arrived.get(j) == orderedStack.get(j)) {
					stillInPosition++;
				}
			}
			
			System.out.println(stillInPosition);
			
			arrived.clear();
			orderedStack.clear();
		}

	}

}