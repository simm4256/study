import java.util.Scanner;

public class PrintMinNum {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int arr[] = new int[10];
		int min = Integer.MAX_VALUE;
		for(int i=0;i<10;i++) {
			arr[i] = scanner.nextInt();
			if(arr[i]<=0) {
				System.out.println("양수가 아닙니다. 다시 입력해주세요.");
				i--;
				continue;
			}
			if(min>arr[i]) min = arr[i];
		}
		System.out.println("min : "+min);
	}
}
