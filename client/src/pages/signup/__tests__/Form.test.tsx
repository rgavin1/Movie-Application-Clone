import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Form from "../Form"


describe('<SignUpForm />', () => {
    // constants
    const GIVEN_USERNAME = 'foobar1name'

    // form elements
    const cancelButton = () => screen.getByRole('button', { name: /cancel/i })
    const usernameInput = () => screen.getByRole('textbox', { name: "Username" })


    describe('Input: Username', () => {
        const renderedComponent = () => {
            render(<Form />)
            const userNameElement = usernameInput()
            expect(userNameElement).toHaveValue('')
            userEvent.type(userNameElement, GIVEN_USERNAME)
        }

        it('confirms username input is a value', () => {
            renderedComponent()
            const userNameElement = usernameInput()
            expect(userNameElement).toHaveValue(GIVEN_USERNAME)
        })

        it('verfies username min. 4 characters', () => {
            renderedComponent()
            const userNameElement = usernameInput()
            expect(userNameElement.getAttribute('value')?.length).toBeGreaterThan(4)
        })
    })
    it.todo('verfies username can update')
    it.todo('confirms username does not start with whitespaces')
    it.todo('should remove trailing whitespaces from username')
    it.todo('inputs password')
    it.todo('confirms passeord does not start with whitespaces')
    it.todo('should remove trailing whitespaces from password')
    it.todo('clears password')
    it.todo('inputs email')
    it.todo('should remove whitespaces from email')
    it.todo('clears entire form')
    it.todo('submits form')
    it.todo('cancel button is disabled')
    it.todo('cancel button is enabled')

    describe.skip('errors', () => { })
})