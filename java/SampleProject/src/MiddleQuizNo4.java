import java.util.Scanner;

public class MiddleQuizNo4 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int arr[] = new int[5];
		int sum = 0;
		for(int i=0;i<arr.length;i++) {
			System.out.print("���� �Է�>>");
			arr[i] = scanner.nextInt();
			sum += arr[i];
		}
		System.out.printf("��� : %f", (float)sum/arr.length);
	}
}
