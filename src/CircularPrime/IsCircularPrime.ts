import {GetNumberRotations} from "./GetNumberRotations";
import {IsPrimeNumber} from "./IsPrimeNumber";

export class IsCircularPrime {
    constructor(private getNumberRotations: GetNumberRotations, private isPrimeNumber: IsPrimeNumber) {

    }

    execute(number: number): boolean {
        if (!this.isPrimeNumber.execute(number)) { return false; }

        let isCircularPrime = true;
        const rotations = this.getNumberRotations.execute(number);

        rotations.forEach((rotation) => {
            if (!this.isPrimeNumber.execute(rotation)) {
                isCircularPrime = false;
                return;
            }
        })

        return isCircularPrime;

    }
}
