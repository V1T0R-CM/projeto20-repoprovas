import { faker } from "@faker-js/faker";

export async function registerFactory(passwordLength: number, confirmPasswordValid: boolean) {
    const password = faker.internet.password(passwordLength);
    const passwordConfirmation = confirmPasswordValid ? password : faker.internet.password(passwordLength);
    return await {
        email: faker.internet.email(),
        password: password,
        passwordConfirmation: passwordConfirmation
    };
}

export async function loginFactory(existEmail: string, existPassword: string) {
    const email = existEmail ? existEmail : faker.internet.email();
    const password = existPassword ? existPassword : faker.internet.password(10);
    return await {
        email: email,
        password: password
    };
}