import { Person } from '../src/person';
import { PersonCustomMatchers } from '../src/test-helpers/custom-matcher';

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toBeOlderThan(expected: any, expectationFailOutput?: any): boolean;
            toBeFirstNameEqualTo(expected: any, expectationFailOutput?: any): boolean;
            toBeLastNameEqualTo(expected: any, expectationFailOutput?: any): boolean;
        }
    }
}

describe('Person', () => {
    var person = new Person();

    beforeEach(function(){
        jasmine.addMatchers(PersonCustomMatchers);
    })

    it('Should match first name', () => {
        person.setName("first last");

        var result = person.getName();

        expect(result).toBeFirstNameEqualTo("first");
    })

    it('Should match last name', () => {
        person.setName("first last");

        var result = person.getName();

        expect(result).toBeLastNameEqualTo("last");
    })

    it('Should match age', () => {
        person.setAge(106);

        var result = person.getAge();

        expect(result).toBe(106);
    })

    it('should older than 100', () => {
        person.setAge(106);

        var result = person.getAge();

        expect(result).toBeOlderThan(100);
    })
})