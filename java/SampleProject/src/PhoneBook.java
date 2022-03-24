import java.util.Scanner;

public class PhoneBook {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n;
		Phone p[];
		System.out.print("인원수>>");
		n = scanner.nextInt();
		p = new Phone[n];
		
		for(int i=0;i<n;i++) {
			String name, num;
			System.out.print("이름과 전화번호(이름과 번호는 빈 칸 없이 입력)>>");
			name = scanner.next();
			num = scanner.next();
			p[i] = new Phone(name, num);
		}
		System.out.println("저장되었습니다...");
		
		while(true) {
			System.out.print("검색할 이름>>");
			String order;
			order = scanner.next();
			if(order.equals("그만"))
				break;
			for(int i=0;i<n;i++) {
				if(order.equals(p[i].name)) {
					System.out.printf("%s의 번호는 %s\n",p[i].name,p[i].tel);
					break;
				}
				if(i==(n-1))
					System.out.printf("%s이 없습니다.\n",order);
			}
		}
	}
	
}
