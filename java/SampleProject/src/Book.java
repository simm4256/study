import java.util.Scanner;

public class Book {
	String title;
	String author;
	
	public Book(String t) { // ������
		title = t; author = "���ڹ̻�";
	}
	
	public Book(String t, String a) { // ������
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
