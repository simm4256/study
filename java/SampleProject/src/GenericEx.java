public class GenericEx<T> {
	T val;
	void set(T a) {
		val = a;
	}
	T get() {
		return val;
	}

	public static void main(String[] args) {
		GenericEx<String> gen1 = new GenericEx<String>();
		gen1.set("Generic");
		GenericEx<Integer> gen2 = new GenericEx<Integer>();
		gen2.set(234);
		GenericEx<String> gen3 = new GenericEx<String>();
		gen3.set("banana");
		GenericEx<String> gen4 = new GenericEx<String>();
		gen4.set("apple");
		GenericEx<String> gen5 = new GenericEx<String>();
		gen5.set("orange");
		GenericEx<Integer> gen6 = new GenericEx<Integer>();
		gen6.set(4444);
		GenericEx<Integer> gen7 = new GenericEx<Integer>();
		gen7.set(1111);
		GenericEx<Integer> gen8 = new GenericEx<Integer>();
		gen8.set(2222);
		GenericEx<Integer> gen9 = new GenericEx<Integer>();
		gen9.set(3333);
		
		System.out.printf("%s %d %s %s %s %d %d %d %d",
				gen1.get(),gen2.get(),gen3.get(),gen4.get()
				,gen5.get(),gen6.get(),gen7.get(),gen8.get(),gen9.get());
	}

}
