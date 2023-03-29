import { rest } from 'msw'

// import mock data JSON here


// Set URL to mock
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  rest.post('/auth/login', (req, res, ctx) => {
    return res(
       ctx.status(200),
       ctx.json({token: 'thisisajsonwebtoken'})
    )
 }),
]