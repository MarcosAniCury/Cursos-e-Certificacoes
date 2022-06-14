package com.avenue.newJava;

import com.avenue.model.Gender;
import com.avenue.model.Person;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class newJava {

    public static void declarative() {
        System.out.println("Declarative way:");
        List<Person> people = List.of(
                new Person("Marcos", Gender.MALE),
                new Person("Leticia", Gender.FEMALE),
                new Person("Saraiva", Gender.MALE),
                new Person("Madu", Gender.FEMALE),
                new Person("Vitor", Gender.MALE)
        );

        List<Person> females = people.stream()
                .filter(person -> person.getGender().equals(Gender.FEMALE))
                .collect(Collectors.toList());

        females.forEach(System.out::println);
        System.out.println("");
    }

    //Forma nova de criar funcoes
    public static void _Functions() {
        System.out.println("Old way functions:");
        int increment = incrementFunction.apply(1);
        System.out.println(increment);
        System.out.println("");
    }

    private static Function<Integer,Integer> incrementFunction = number -> ++number;
}
