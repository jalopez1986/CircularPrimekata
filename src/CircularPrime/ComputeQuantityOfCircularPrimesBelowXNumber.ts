import {IsCircularPrime} from "./IsCircularPrime";

export class ComputeQuantityOfCircularPrimesBelowXNumber {
    constructor(private isCircularPrime: IsCircularPrime) {

    }

    execute(number: number) {
        let quantity = 0;
        for (let i = 1; i <= number; i++) {
            if (this.isCircularPrime.execute(i)) { quantity = quantity + 1; }
        }
        return quantity;
    }
}
