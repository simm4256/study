
public class practice {
	
	public double avr(int[] a) {
		int sum = 0;
		for(int i=0;i<a.length;i++) {
			sum += a[i];
		}
		return (double)sum / a.length;
	}
	public static void main(String[] args) {
		int myarr[] = {1,2,10};
		practice p = new practice();
		System.out.println(p.avr(myarr));

	}

}
