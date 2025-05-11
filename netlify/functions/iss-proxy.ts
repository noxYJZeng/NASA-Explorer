// netlify/functions/iss-proxy.ts

import type { Handler } from '@netlify/functions'

export const handler: Handler = async () => {
  try {
    const response = await fetch('http://api.open-notify.org/iss-now.json')
    const data = await response.json()

    if (data.message !== 'success') {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Failed to get ISS data' }),
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Proxy error', details: (error as Error).message }),
    }
  }
}
