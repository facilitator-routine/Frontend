// __tests__/fetch.test.js
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import ViewListRoutines from "../components/ViewListRoutines";

const server = setupServer(
    rest.get('/v1/routines', (req, res, ctx) => {
        return res(ctx.json({ routines: []}))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Cuando inicia el componente se muestra el componente loader', async () => {
    render(<ViewListRoutines />)
    expect(screen.getByRole('heading')).toHaveTextContent('Mis Rutinas')
    expect(screen.getByTestId('loader')).toBeInTheDocument()
})

test('Cuando hace un get rutinas y la lista es vacia muestra texto informativo', async () => {
    render(<ViewListRoutines />)

    await waitFor(() => screen.getByText('No hay Rutinas creadas'))
})

test('Cuando hace un get rutinas y la lista tiene elementos, los muestra y tambien el boton agregar', async () => {
    server.use(
        rest.get('/v1/routines', (req, res, ctx) => {
            return res(ctx.json({ routines: [{name:"NombreRutina", description:"describo rutina"}]}))
        }),
    )
    render(<ViewListRoutines />)

    await waitFor(() => screen.getByTestId('listRoutines'))

    expect(screen.getByText('NombreRutina')).toBeInTheDocument()
    expect(screen.getByText('describo rutina')).toBeInTheDocument()
})

test('Cuando hace un get rutinas y la lista tiene elementos, los muestra y presiono borro rutina exitosamente', async () => {
    server.use(
        rest.get('/v1/routines', (req, res, ctx) => {
            return res.once(ctx.json({ routines: [{_id:"123", name:"NombreRutina", description:"describo rutina"}, {_id:"124", name:"NombreRutina2", description:"describo rutina2"}]}))
        }),
    )

    render(<ViewListRoutines/>)

    await waitFor(() => screen.getByTestId('listRoutines'))

    server.use(
        rest.delete('/v1/routines/124', (req, res, ctx) => {
            return res(ctx.status(204))
        }),
    )

    server.use(
        rest.get('/v1/routines', (req, res, ctx) => {
            return res(ctx.json({routines: [{_id: "123", name: "NombreRutina", description: "describo rutina"}]}))
        }),
    )

    fireEvent.click(screen.getByTestId('deleteRoutine-124'))

    await waitFor(() => {
        expect(screen.queryByText('NombreRutina2')).not.toBeInTheDocument()
        expect(screen.queryByText('describo rutina2')).not.toBeInTheDocument()
    })
})
