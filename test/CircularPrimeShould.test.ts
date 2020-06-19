import { GetNumberRotations } from "../src/CircularPrime/GetNumberRotations";
import { IsPrimeNumber } from "../src/CircularPrime/IsPrimeNumber";
import {IsCircularPrime} from "../src/CircularPrime/IsCircularPrime";
import {ComputeQuantityOfCircularPrimesBelowXNumber} from "../src/CircularPrime/ComputeQuantityOfCircularPrimesBelowXNumber";



describe("Circular Prime Suit", () => {
    describe('Rotation should', () => {
        let getNumberRotations: GetNumberRotations;

        beforeEach(() => {
            getNumberRotations = new GetNumberRotations();
        });

        test("given a number of length 1, the rotation action must be return 0 rotations ", () => {

            const rotations = getNumberRotations.execute(5);

            expect(rotations.length).toBe(0);
        });

        test("given a number of length 2, the rotation action must be return 1 rotations ", () => {

            const rotations = getNumberRotations.execute(71);

            expect(rotations.length).toBe(1);
            expect(rotations[0]).toBe(17);
        });

        test("given a number of length 3, the rotation action must be return 2 rotations ", () => {

            const rotations = getNumberRotations.execute(197);

            expect(rotations.length).toBe(2);
            expect(rotations[0]).toBe(971);
            expect(rotations[1]).toBe(719);
        });

        test("given a number of length 4, the rotation action must be return 3 rotations ", () => {

            const rotations = getNumberRotations.execute(1193);

            expect(rotations.length).toBe(3);
            expect(rotations[0]).toBe(1931);
            expect(rotations[1]).toBe(9311);
            expect(rotations[2]).toBe(3119);
        });
    });

    describe('Is a Prime Number should', () => {
        let isPrimeNumber: IsPrimeNumber;

        beforeEach(() => {
            isPrimeNumber = new IsPrimeNumber();
        });

        test("given a prime number, the action must answer true", () => {

            const isPrime = isPrimeNumber.execute(3);

            expect(isPrime).toBeTruthy();
        });

        test("given a non prime number, the action must answer false", () => {

            const isPrime = isPrimeNumber.execute(6);

            expect(isPrime).not.toBeTruthy();
        });

        test("if the given number is equal to 0, the action must answer false", () => {

            const isPrime = isPrimeNumber.execute(1);

            expect(isPrime).not.toBeTruthy();
        });

        test("if the given number is equal to one, the action must answer false", () => {

            const isPrime = isPrimeNumber.execute(1);

            expect(isPrime).not.toBeTruthy();
        });

        test("if the given number is equal to 2, the action must answer true", () => {

            const isPrime = isPrimeNumber.execute(2);

            expect(isPrime).toBeTruthy();
        });

        test("if the given number is equal to 9, the action must answer false", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const isPrime = isPrimeNumber.execute(9);

            expect(isPrime).not.toBeTruthy();
        });

        test("if the given number is equal to 19, the action must answer true", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const isPrime = isPrimeNumber.execute(19);

            expect(isPrime).toBeTruthy();
        });

        test("if the given number is equal to 19531, the action must answer true", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const isPrime = isPrimeNumber.execute(19531);

            expect(isPrime).toBeTruthy();
        });

    });

    describe('Is Circular Prime', () => {
        let getNumberRotations!: GetNumberRotations;
        let isPrimeNumber: IsPrimeNumber;
        let isCircularPrime: IsCircularPrime;

        beforeEach(() => {
            getNumberRotations = new GetNumberRotations();
            isPrimeNumber = new IsPrimeNumber();
            isCircularPrime = new IsCircularPrime(getNumberRotations, isPrimeNumber);
        });

        test("if the given number is 0, the action must be return false", () => {

            const res = isCircularPrime.execute(0);

            expect(res).not.toBeTruthy();
        });

        test("if the given number is 1, the action must be return false", () => {

            const res = isCircularPrime.execute(1);

            expect(res).not.toBeTruthy();
        });

        test("if the given number is 2, the action must be return true", () => {

            const res = isCircularPrime.execute(2);

            expect(res).toBeTruthy();
        });

        test("if the given number is 3, the action must be return true", () => {

            const res = isCircularPrime.execute(3);

            expect(res).toBeTruthy();
        });

        test("if the given number is 11, the action must be return true", () => {

            const res = isCircularPrime.execute(11);

            expect(res).toBeTruthy();
        });

        test("if the given number is not a circular prime, the action must be return false", () => {

            const res = isCircularPrime.execute(19);

            expect(res).not.toBeTruthy();
        });

        test("if the given number is another not circular prime, the action must be return false", () => {

            const res = isCircularPrime.execute(67);

            expect(res).not.toBeTruthy();
        });

        test("if the given number is a circular prime, the action must be return true", () => {

            const res = isCircularPrime.execute(71);

            expect(res).toBeTruthy();
        });

        test("if the given number is a another circular prime, the action must be return true", () => {

            const res = isCircularPrime.execute(1193);

            expect(res).toBeTruthy();
        });
    });

    describe('How many circular primes are below x number', () => {
        let getNumberRotations!: GetNumberRotations;
        let isPrimeNumber: IsPrimeNumber;
        let isCircularPrime: IsCircularPrime;
        let computeNumberOfCircularPrimesBelowXNumber: ComputeQuantityOfCircularPrimesBelowXNumber;

        beforeEach(() => {
            getNumberRotations = new GetNumberRotations();
            isPrimeNumber = new IsPrimeNumber();
            isCircularPrime = new IsCircularPrime(getNumberRotations, isPrimeNumber);
            computeNumberOfCircularPrimesBelowXNumber = new ComputeQuantityOfCircularPrimesBelowXNumber(isCircularPrime);
        });

        test("There are 0 circular primes below 1", () => {

            const res = computeNumberOfCircularPrimesBelowXNumber.execute(1);

            expect(res).toBe(0);
        });

        test("There are 4 circular primes below 10", () => {

            const res = computeNumberOfCircularPrimesBelowXNumber.execute(10);

            expect(res).toBe(4);
        });

        test("There are 13 circular primes below 100", () => {

            const res = computeNumberOfCircularPrimesBelowXNumber.execute(100);

            expect(res).toBe(13);
        });

        test("There are 25 circular primes below 1000", () => {

            const res = computeNumberOfCircularPrimesBelowXNumber.execute(1000);

            expect(res).toBe(25);
        });

        test("There are 33 circular primes below 10000", () => {

            const res = computeNumberOfCircularPrimesBelowXNumber.execute(10000);

            expect(res).toBe(33);
        });

        test("There are 43 circular primes below 100000", () => {

            const res = computeNumberOfCircularPrimesBelowXNumber.execute(100000);

            expect(res).toBe(43);
        });

        test("There are 55 circular primes below 1000000", () => {

            const res = computeNumberOfCircularPrimesBelowXNumber.execute(1000000);

            expect(res).toBe(55);
        });

    });
});
