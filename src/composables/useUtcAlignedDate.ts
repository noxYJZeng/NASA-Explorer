export function useUtcAlignedDate() {
    // 返回当前本地时间（Date 对象）
    const getLocalDate = () => new Date()
  
    // 返回当前 UTC 日期字符串（用于 NASA API）
    const getUtcDateString = (): string => {
      const now = new Date()
      const y = now.getUTCFullYear()
      const m = String(now.getUTCMonth() + 1).padStart(2, '0')
      const d = String(now.getUTCDate()).padStart(2, '0')
      return `${y}-${m}-${d}` // e.g. 2025-05-10
    }
  
    // 返回给用户看的本地日期字符串（例如 5/9/2025）
    const formatLocalDate = (dateStr: string): string => {
      const [y, m, d] = dateStr.split('-')
      return `${Number(m)}/${Number(d)}/${y}`
    }
  
    return {
      getLocalDate,
      getUtcDateString,
      formatLocalDate,
    }
  }
  