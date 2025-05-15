// Tdd approach

import { render, screen } from "@testing-library/react"
import Greet from "./greet"

describe('Greet', () => {
test('renders correctly', () => {
    render(<Greet/>)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

describe('Nested', () => {
test('renders with a name', () => {
    render (<Greet name= 'Rakshith' />)
    const textElement = screen.getByText('Hello Rakshith')
    expect(textElement).toBeInTheDocument()
})
})

})



/* JEST it Method */

// describe('Greet', () => {
// it('renders correctly', () => {
//     render(<Greet/>)
//     const textElement = screen.getByText('Hello')
//     expect(textElement).toBeInTheDocument()
// })

// describe('Nested', () => {
// fit('renders with a name', () => {
//     render (<Greet name= 'Rakshith' />)
//     const textElement = screen.getByText('Hello Rakshith')
//     expect(textElement).toBeInTheDocument()
// })
// })

// })



/* JEST Watch mode */ 

// test.skip('Greet renders with a name', () => {
//     render (<Greet name= 'Rakshith' />)
//     const textElement = screen.getByText('Hello Rakshith')
//     expect(textElement).toBeInTheDocument()
// })