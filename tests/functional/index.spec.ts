import { describe, it, expect } from 'vitest'
import api from '../api.js'

describe('Tests', () => {
  it('example', async () => {
    const response = await api.get('/')

    expect(response.status).toBe(200)
  })
})
