export class IsPrimeNumber {
    execute(number: number) {

        if (number === 0 || number === 1) { return false; }

        const maxDivider = Math.floor(Math.sqrt(number));

        for (let i = 2; i <= maxDivider; i++) {
            if (number % i === 0) { return false; }
        }
        return true;
    }
}
