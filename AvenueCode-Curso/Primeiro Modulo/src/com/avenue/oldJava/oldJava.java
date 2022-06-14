package com.avenue.oldJava;

import com.avenue.model.Gender;
import com.avenue.model.Person;

import java.util.ArrayList;
import java.util.List;

public class oldJava {

    public static void imperative() {
        System.out.println("Imperative way:");

        List<Person> people = List.of(
                new Person("Marcos", Gender.MALE),
                new Person("Leticia", Gender.FEMALE),
                new Person("Saraiva", Gender.MALE),
                new Person("Madu", Gender.FEMALE),
                new Person("Vitor", Gender.MALE)
        );

        List<Person> female = new ArrayList<>();

        for (Person person : people) {
            if (person.getGender().equals(Gender.FEMALE)) {
                female.add(person);
            }
        }

        female.forEach(System.out::println);

        System.out.println("");
    }

    //Forma antiga de criar funcoes
    public static void _Functions() {
        System.out.println("Old way functions:");
        int increment = increment(1);
        System.out.println(increment);
        System.out.println("");
    }

    private static int increment(int i) {
        return ++i;
    }
}
