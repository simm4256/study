import java.util.Scanner;

public class Square {
	float width;
	float height;
	
	public Square(float width, float height) {
		this.width = width;
		this.height = height;
	}
	
	public float getArea() {
		return this.width * this.height;
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		float width, height;
		System.out.print("�ʺ� �Է��ϼ��� : ");
		width = scanner.nextFloat();
		System.out.print("���̸� �Է��ϼ��� : ");
		height = scanner.nextFloat();
		Square mySquare = new Square(width, height);
		
		System.out.printf("�ش� �簢���� �������� %f�Դϴ�.",mySquare.getArea());
	}
}
