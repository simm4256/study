public class Circle {
	float radius;
	String name;
	
	public Circle(float radius, String name) {
		this.radius = radius;
		this.name = name;
	}
	
	public static void main(String[] args) {
		Circle myCircle = new Circle(1, "���׶��1");
		System.out.printf("%s�� ������ : %f",myCircle.name,myCircle.radius);
	}
}

