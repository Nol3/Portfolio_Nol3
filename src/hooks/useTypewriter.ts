import { useState, useEffect } from 'react';

export function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseMs = 2600
) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let delay: number;

    if (!isDeleting && displayed.length < current.length) {
      delay = typeSpeed;
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), delay);
      return () => clearTimeout(t);
    }

    if (!isDeleting && displayed.length === current.length) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length > 0) {
      delay = deleteSpeed;
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), delay);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}
