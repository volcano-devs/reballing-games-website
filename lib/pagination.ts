export function getRange(page: number) {
  const start = (page - 1) * 10
  const end = start + 10

  return {start, end}
}
