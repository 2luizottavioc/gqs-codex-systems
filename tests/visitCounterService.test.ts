import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  incrementVisitCount,
  getVisitCount,
  resetVisitCount,
} from '../src/services/visitCounterService'

describe('visitCounterService', () => {
  beforeEach(() => {
    const store: Record<string, string> = {}
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => store[key] ?? null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key]
      }),
      clear: vi.fn(() => {
        for (const key in store) {
          delete store[key]
        }
      }),
    })
  })

  it('Deve retornar 0 se não houver valor salvo', () => {
    expect(getVisitCount()).toBe(0)
  })

  it('Deve incrementar a contagem de visitas', () => {
    expect(incrementVisitCount()).toBe(1)
    expect(incrementVisitCount()).toBe(2)
    expect(getVisitCount()).toBe(2)
  })

  it('Deve resetar a contagem', () => {
    incrementVisitCount()
    incrementVisitCount()
    resetVisitCount()
    expect(getVisitCount()).toBe(0)
  })
})
