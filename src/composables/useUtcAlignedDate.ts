export function useDateHelpers() {
  const getNow = () => new Date()

  const getTodayDateString = (): string => {
    const now = new Date()
    const y = now.getFullYear()
    const m = String(now.getMonth() + 1).padStart(2, '0')
    const d = String(now.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }

  const formatDateForDisplay = (dateStr: string): string => {
    const [y, m, d] = dateStr.split('-')
    return `${Number(m)}/${Number(d)}/${y}`
  }

  return {
    getNow,
    getTodayDateString,
    formatDateForDisplay
  }
}
