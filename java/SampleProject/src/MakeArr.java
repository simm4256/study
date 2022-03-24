
public class MakeArr {
	
	public static int[] makeArray() {
		int res[] = {1,2,3,4};
		return res;
	}

	public static void main(String[] args) {
		int arr[] = makeArray();
		for(int i=0;i<4;i++) {
			System.out.println(arr[i]);
		}
	}

}
