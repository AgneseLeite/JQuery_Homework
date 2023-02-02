/**
 * @jest-environment jsdom
 */
import { validateFirstName } from './scripts';
import { validateLastName } from './scripts';
import { validateEmail } from './scripts';
import { validatePassword } from './scripts';
import * as $ from 'jquery';
global.$ = $;
global.jQuery = $;


// firstNameValidation
describe(validateFirstName, () => {
    it("should log out 'false' if name is wrong and 'true' if it is correct", () => {
        const result = validateFirstName("Agnese");

        console.log("result: ", result)
    })
})


// lastNameValidation
describe(validateLastName, () => {
    it("should log out 'false' if last name is wrong and 'true' if it is correct", () => {
        const result = validateLastName("Leite");

        console.log("result: ", result)
    })
})


// emailValidation
describe(validateEmail, () => {
    it("should log out 'false' if email is wrong and 'true' if it is correct", () => {
        const result = validateEmail("epasts@inbox.lv");

        console.log("result: ", result)
    })
})


// passwordValidation
describe(validatePassword, () => {
    it("should log out 'false' if password is wrong and 'true' if it is correct", () => {
        const result = validatePassword("Password12*&");

        console.log("result: ", result)
    })
})





 