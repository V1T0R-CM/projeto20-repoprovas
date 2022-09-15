import { faker } from "@faker-js/faker";

export function registerFactory(passwordLength: number, confirmPasswordValid: boolean) {
    const password = faker.internet.password(passwordLength);
    const passwordConfirmation = confirmPasswordValid ? password : faker.internet.password(passwordLength);
    return {
        email: faker.internet.email(),
        password: password,
        passwordConfirmation: passwordConfirmation
    };
}

export function loginFactory(existEmail: string, existPassword: string) {
    const email = existEmail ? existEmail : faker.internet.email();
    const password = existPassword ? existPassword : faker.internet.password(10);
    return {
        email: email,
        password: password
    };
}