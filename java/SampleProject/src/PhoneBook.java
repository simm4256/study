import java.util.Scanner;

public class PhoneBook {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n;
		Phone p[];
		System.out.print("�ο���>>");
		n = scanner.nextInt();
		p = new Phone[n];
		
		for(int i=0;i<n;i++) {
			String name, num;
			System.out.print("�̸��� ��ȭ��ȣ(�̸��� ��ȣ�� �� ĭ ���� �Է�)>>");
			name = scanner.next();
			num = scanner.next();
			p[i] = new Phone(name, num);
		}
		System.out.println("����Ǿ����ϴ�...");
		
		while(true) {
			System.out.print("�˻��� �̸�>>");
			String order;
			order = scanner.next();
			if(order.equals("�׸�"))
				break;
			for(int i=0;i<n;i++) {
				if(order.equals(p[i].name)) {
					System.out.printf("%s�� ��ȣ�� %s\n",p[i].name,p[i].tel);
					break;
				}
				if(i==(n-1))
					System.out.printf("%s�� �����ϴ�.\n",order);
			}
		}
	}
	
}
