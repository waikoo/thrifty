export function getLastDayISO() {
  const now = new Date()
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  return oneDayAgo.toISOString()
}
