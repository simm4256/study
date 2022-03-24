
public class Person {
	String name, id;
	public Person(String name) {
		this.name = name;
	}
}

class Student extends Person{
	char grade;
	String department;
	public Student(String name) {
		super(name);
	}
}