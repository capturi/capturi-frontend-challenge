import { Tracker } from 'shared'

const store: Tracker[] = [
  {
    id: 1,
    name: 'Cause of call',
    speaker: 'agent',
    phrases: [
      'the reason I call',
      'the reason for contact',
      'I will call you',
      'call because',
    ],
  },
  {
    id: 2,
    name: 'Happy customers',
    speaker: 'customer',
    phrases: [
      'thank you very much',
      'nice',
      'many thanks',
      'thank you',
      'wonderful',
      'fantastic',
      'thank you for the help',
      'super',
      'cool',
      'happy',
    ],
  },
  {
    id: 3,
    name: 'Forthcomingness',
    speaker: 'agent',
    phrases: [
      'anything else I can',
      'need help',
      'you are right',
      'more questions',
      'alright',
      'can I help',
      'You are welcome',
      'would like to help',
    ],
  },
  {
    id: 4,
    name: 'Dissatisfied customers',
    speaker: 'customer',
    phrases: [
      'simply do not understand',
      'too bad',
      'bad',
      'annoying',
      'your boss',
      'insanely poor',
      'bad service',
      'poor service',
      'do not call again',
      'angry',
    ],
  },
  {
    id: 5,
    name: 'Acceptance',
    speaker: 'both',
    phrases: [
      'Agree to',
      'I think so',
      'you think so',
      'you probably want to',
      'we agree',
      'we do not agree',
      'agree with me',
      'good sense',
      'assume',
    ],
  },
]

export function findAll(): Tracker[] {
  return store
}

export function find(id: number): Tracker | undefined {
  return store.find((tracker) => tracker.id === id)
}

export function insert(data: Omit<Tracker, 'id'>): Tracker {
  const newTracker = {
    ...data,
    id: store.length + 1,
  }
  store.push(newTracker)
  return newTracker
}

export function replace(
  id: number,
  data: Omit<Tracker, 'id'>,
): Tracker | undefined {
  const index = store.findIndex((tracker) => tracker.id === id)
  if (index === -1) {
    throw new Error(`tracker with id "${id}" not found`)
  }
  const updatedTracker = {
    ...data,
    id,
  }
  store.splice(index, 1, updatedTracker)
  return updatedTracker
}

export function remove(id: number): void {
  const index = store.findIndex((tracker) => tracker.id === id)
  if (index === -1) {
    throw new Error(`tracker with id "${id}" not found`)
  }
  store.splice(index, 1)
}
