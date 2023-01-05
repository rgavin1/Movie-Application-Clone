import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Form from "../Form"


describe('<SignUpForm />', () => {
    // constants
    const GIVEN_USERNAME = 'foobar1name'
    // const GIVEN_PASSWORD = 'password1234'
    const GIVEN_EMAIL = 'foo@bar.dev'

    // form elements
    const cancelButton = () => screen.getByRole('button', { name: /cancel/i })
    const usernameInput = () => screen.getByRole('textbox', { name: "Username" })
    const emailInput = () => screen.getByRole('textbox', { name: /email/i })
    // TODO: Find the password input
    // const passwordInput = () => screen.getByRole('password', { name: /password/i })


    describe('Input: Username', () => {
        const renderedComponentWith = (userName = "") => {
            render(<Form />)
            const userNameElement = usernameInput()
            expect(userNameElement).toHaveValue('')

            const inputValue = userName || GIVEN_USERNAME
            userEvent.type(userNameElement, inputValue)
        }

        it('confirms username input is a value', () => {
            renderedComponentWith()
            const userNameElement = usernameInput()
            expect(userNameElement).toHaveValue(GIVEN_USERNAME)
        })

        it('verfies username min. 4 characters', () => {
            renderedComponentWith()
            const userNameElement = usernameInput()
            expect(userNameElement.getAttribute('value')?.length).toBeGreaterThan(4)
        })

        it('confirms username does not start with whitespaces', () => {
            const givenInputValue = "  username"
            renderedComponentWith(givenInputValue)
            const userNameElement = usernameInput()
            expect(userNameElement).toHaveValue("username")
        })

        it('should remove trailing whitespaces from username', () => {
            const givenInputValue = "username     "
            renderedComponentWith(givenInputValue)
            const userNameElement = usernameInput()
            expect(userNameElement).toHaveValue("username")
        })

        it('verfies username can be updated', () => {
            const expectedInputValue = "change_to_this_name"

            renderedComponentWith()
            const userNameElement = usernameInput()

            userEvent.clear(userNameElement)
            userEvent.type(userNameElement, expectedInputValue)

            expect(userNameElement).toHaveValue(expectedInputValue)
            expect(userNameElement).not.toHaveValue(GIVEN_USERNAME)
        })
    })

    // describe('Input: Password', () => {
    //     const renderedComponentWithPassword = (password = "") => {
    //         render(<Form />)
    //         const passwordElement = passwordInput()
    //         expect(passwordElement).toHaveValue('')

    //         const inputValue = password || GIVEN_PASSWORD
    //         userEvent.type(passwordElement, inputValue)
    //     }

    //     it('inputs password', () => {
    //         renderedComponentWithPassword()
    //         const passwordElement = passwordInput()
    //         expect(passwordElement).toHaveValue(GIVEN_PASSWORD)
    //     })

    // })

    it.todo('confirms passeord does not start with whitespaces')
    it.todo('should remove trailing whitespaces from password')
    it.todo('clears password')

    describe('Input: Email', () => {
        const renderedComponentWithEmail = (email = "") => {
            render(<Form />)
            const emailAddressElement = emailInput()
            expect(emailAddressElement).toHaveValue('')

            const inputValue = email || GIVEN_EMAIL
            userEvent.type(emailAddressElement, inputValue)
        }

        it('verify email', () => {
            renderedComponentWithEmail()
            const emailAddressElement = emailInput()
            expect(emailAddressElement).toHaveValue(GIVEN_EMAIL)
        })

        it('should remove whitespaces from email', () => {
            const givenEmailValue = "  123@gmail.com     "
            renderedComponentWithEmail(givenEmailValue)
            const emailAddressElement = emailInput()
            expect(emailAddressElement).toHaveValue("123@gmail.com")
            expect(emailAddressElement).not.toHaveValue(givenEmailValue)
        })
    })
    it.todo('clears entire form')
    it.todo('submits form')
    it.todo('cancel button is disabled')
    it.todo('cancel button is enabled')

    describe.skip('errors', () => { })
})