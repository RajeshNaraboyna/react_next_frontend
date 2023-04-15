import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { TypographyComponent } from '.'

describe("Display Typography", () => {
    test("Should display typography", () => {
        render(<TypographyComponent children="Hello"/>)
        const component = screen.getByTestId("typography")
        expect(component).toBeInTheDocument()
        expect(component).toHaveTextContent("Hello")
    })
})