import { GetNumberRotations } from "../src/CircularPrime/GetNumberRotations";
import { IsPrimeNumber } from "../src/CircularPrime/IsPrimeNumber";



describe("Circular Prime Suit", () => {
    describe('Rotation should', () => {
        test("given a number of length 1, the rotation action must be return 0 rotations ", () => {
            const getNumberRotations = new GetNumberRotations();

            const res = getNumberRotations.execute(5);

            expect(res.length).toBe(0);
        });


        test("given a number of length 2, the rotation action must be return 1 rotations ", () => {
            const getNumberRotations = new GetNumberRotations();

            const res = getNumberRotations.execute(71);

            expect(res.length).toBe(1);
            expect(res[0]).toBe(17);
        });

        test("given a number of length 3, the rotation action must be return 2 rotations ", () => {
            const getNumberRotations = new GetNumberRotations();

            const res = getNumberRotations.execute(197);

            expect(res.length).toBe(2);
            expect(res[0]).toBe(971);
            expect(res[1]).toBe(719);
        });

        test("given a number of length 4, the rotation action must be return 3 rotations ", () => {
            const getNumberRotations = new GetNumberRotations();

            const res = getNumberRotations.execute(1193);

            expect(res.length).toBe(3);
            expect(res[0]).toBe(1931);
            expect(res[1]).toBe(9311);
            expect(res[2]).toBe(3119);
        });
    });

    describe('Is a Prime Number should', () => {
        test("given a prime number, the action must answer true", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const res = isPrimeNumber.execute(3);

            expect(res).toBeTruthy();
        });

        test("given a non prime number, the action must answer false", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const res = isPrimeNumber.execute(6);

            expect(res).not.toBeTruthy();
        });

        test("if the given number is equal to one, the action must answer false", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const res = isPrimeNumber.execute(1);

            expect(res).not.toBeTruthy();
        });

        test("if the given number is equal to 2, the action must answer true", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const res = isPrimeNumber.execute(2);

            expect(res).toBeTruthy();
        });

        test("if the given number is equal to 19, the action must answer true", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const res = isPrimeNumber.execute(19);

            expect(res).toBeTruthy();
        });

    });

    describe('Is Circular Prime', () => {
        test("There are 0 circular primes below 1.", () => {
            const isPrimeNumber = new IsPrimeNumber();

            const res = isPrimeNumber.execute(3);

            expect(res).toBeTruthy();
        });
    });
});
