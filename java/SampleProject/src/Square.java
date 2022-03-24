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
		System.out.print("너비를 입력하세요 : ");
		width = scanner.nextFloat();
		System.out.print("높이를 입력하세요 : ");
		height = scanner.nextFloat();
		Square mySquare = new Square(width, height);
		
		System.out.printf("해당 사각형의 면적값은 %f입니다.",mySquare.getArea());
	}
}
