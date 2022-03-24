import java.util.Scanner;

public class Book {
	String title;
	String author;
	
	public Book(String t) { // 생성자
		title = t; author = "작자미상";
	}
	
	public Book(String t, String a) { // 생성자
		title = t; author = a;
	}
	
	public double avr(int[] a) {
		int sum=0;
		for(int i=0;i<a.length;i++) {
			sum+=a[i];
		}
		return sum / a.length;
	}
	
	public void main(String [] args) {
		int myarr[] = {1,10};
		System.out.print(avr(myarr));
	}
}
