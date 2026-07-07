import { useEffect, useState } from 'react'

const TYPE_DELAY_MS = 75
const DELETE_DELAY_MS = 40
const HOLD_DELAY_MS = 1800
const SWITCH_DELAY_MS = 120

/** Cycles through `words` with a type-and-delete effect. */
export function useTypewriter(words: readonly string[]): string {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const wordComplete = !deleting && text === word
    const wordErased = deleting && text === ''

    const step = () => {
      if (wordComplete) {
        setDeleting(true)
      } else if (wordErased) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }

    const delay = wordComplete
      ? HOLD_DELAY_MS
      : wordErased
        ? SWITCH_DELAY_MS
        : deleting
          ? DELETE_DELAY_MS
          : TYPE_DELAY_MS

    const timer = setTimeout(step, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words])

  return text
}
