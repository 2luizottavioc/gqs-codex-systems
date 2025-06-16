const STORAGE_KEY = 'visit_count'

export function incrementVisitCount(): number {
  const current = getVisitCount()
  const updated = current + 1
  localStorage.setItem(STORAGE_KEY, updated.toString())
  return updated
}

export function getVisitCount(): number {
  const value = localStorage.getItem(STORAGE_KEY)
  return value ? parseInt(value, 10) : 0
}

export function resetVisitCount(): void {
  localStorage.setItem(STORAGE_KEY, '0')
}
