import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./Home";
import React from 'react'
import faker from 'faker'

// See https://testing-library.com/docs/example-react-router/

describe("/testcases", function () {
    it("can add a project (without description)", async () => {
        // Arrange
        render(<App />, {wrapper: MemoryRouter})
        fireEvent.click(screen.getByText('Add project'))
        await waitFor(() => screen.getByText('New project'))
        expect(screen.getByText(/\/testcases/i)).toBeInTheDocument()

        // Act -> Verify
        const input = utils.getByPlaceholderText('System Test for Product A')
        const projectName = faker.lorem.words();
        fireEvent.change(input, {target: {value: projectName}})
        expect(input.value).toBe(projectName)

        // Act -> Verify
        fireEvent.click(screen.getByText(/Save/i))
        await waitFor(() => screen.getByRole(projectName + "has been added. Please click 'Refresh' on the left"))

        // Act -> Verify
        fireEvent.click(screen.getByText(/Close/i))
        expect(screen.getByText(new RegExp(projectName, "i"))).toBeInTheDocument()
    });
})