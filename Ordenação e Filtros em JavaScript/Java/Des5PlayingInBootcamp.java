import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Des5PlayingInBootcamp {
	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);

		List<String> studentsList = new ArrayList<>(); 
        int numbersOfStudents;
		String studentName;
		String passwdNumber;
		int passwdUpdated;
		int currentIndex;
		int firedIndex;
		
		numbersOfStudents = Integer.parseInt(reader.next());
		
		while (numbersOfStudents > 0) {
			for (int i = 0; i < numbersOfStudents; i++) {				
				studentName = reader.next();
				passwdNumber = reader.next();
				studentsList.add(studentName.trim() + " " + passwdNumber.trim());
			}
			
			currentIndex = 0;
			firedIndex = 0;
			passwdUpdated = Integer.parseInt(studentsList.get(currentIndex).split(" ")[1]);
			
			for (int i = 0; i < numbersOfStudents - 1; i++) {
				if (passwdUpdated % 2 == 0) {
					firedIndex = (studentsList.size() - (passwdUpdated % studentsList.size()) + currentIndex) % studentsList.size();
				} else if (passwdUpdated % 2 != 0){
					firedIndex = (passwdUpdated % studentsList.size() + currentIndex) % studentsList.size();
				}
				
			passwdUpdated = Integer.parseInt(studentsList.get(firedIndex).split(" ")[1]);
			studentsList.remove(firedIndex);
			currentIndex = (passwdUpdated % 2 == 0) ? 
					((firedIndex <= studentsList.size() - 1) ? 
							firedIndex : 0):
						((firedIndex == 0) ?
							(studentsList.size() - 1):(firedIndex - 1));				
			}
			System.out.println("Vencedor(a): " + studentsList.get(0).split(" ")[0]);
			studentsList.clear();
			numbersOfStudents = Integer.parseInt(reader.next());
		}
	}
}