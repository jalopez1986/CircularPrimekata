import {GetNumberRotations} from "./GetNumberRotations";
import {IsPrimeNumber} from "./IsPrimeNumber";

export class IsCircularPrime {
    constructor(private getNumberRotations: GetNumberRotations, private isPrimeNumber: IsPrimeNumber) {

    }

    execute(number: number): boolean {
        if (!this.isPrimeNumber.execute(number)) { return false; }

        const rotations = this.getNumberRotations.execute(number);

        return this.areAllTheRotationsPrimeNumbers(rotations);
    }

    private areAllTheRotationsPrimeNumbers(rotations): boolean {
        let  areAllTheRotationsPrimeNumbers = true;
        rotations.forEach((rotation) => {
            if (!this.isPrimeNumber.execute(rotation)) {
                areAllTheRotationsPrimeNumbers = false;
               return;
            }
        })
        return areAllTheRotationsPrimeNumbers;
    }
}
