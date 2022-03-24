import java.util.Scanner;

public class SumPositiveNumber {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int x, sum = 0;
		for(int i=0;i<10;i++) {
			x = scanner.nextInt();
			if(x>0) sum += x;
		}
		System.out.println(sum);
	}
}
