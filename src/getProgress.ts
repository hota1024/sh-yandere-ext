export async function getProgress(): Promise<number> {
  const res = await fetch('http://localhost:8080/task/progress')
  const { progress } = await res.json()

  return progress
}
