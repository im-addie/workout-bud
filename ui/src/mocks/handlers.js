import { rest } from 'msw'

// import mock data JSON here
import workouts from './data/workouts.json'

// Set URL to mock
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  // rest.get(`${baseUrl}/workouts`, (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json(workouts)) // respond using a mocked JSON body
  // })
]