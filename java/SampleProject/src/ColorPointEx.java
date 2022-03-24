
public class ColorPointEx{
	public static void main(String[] args) {
		Point p = new Point();
		p.set(1, 2);
		p.showPoint();
		
		ColorPoint cp = new ColorPoint();
		cp.set(10, 20);
		cp.setColor("Blue");
		cp.showColorPoint();
	}
}