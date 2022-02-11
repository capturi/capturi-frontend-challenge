export const Speakers = ['agent', 'customer', 'both'] as const

export type Tracker = {
  id: number
  name: string
  speaker: typeof Speakers[number]
  phrases: string[]
}
