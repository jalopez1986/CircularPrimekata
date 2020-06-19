export class GetNumberRotations {

    execute(value: number): number[] {
        let rotations: number[] = [];
        if (value.toString().length === 1) { return rotations; }

        rotations = this.computeRotations(value);

        return rotations;

    }

    private computeRotations(value: number): number[] {
        const rotations: number[] = [];

        let actualRotation = value.toString();

        for (let i = 0; i < value.toString().length - 1; i++) {
            actualRotation = this.rotate(actualRotation);
            rotations.push(Number(actualRotation));
        }

        return rotations;
    }

    private rotate(valueToRotate: string): string {
        const firstDigit = valueToRotate[0];
        valueToRotate = valueToRotate.substring(1, valueToRotate.length);
        valueToRotate = valueToRotate + firstDigit;
        return valueToRotate;
    }
}
