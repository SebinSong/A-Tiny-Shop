/*
- Project breakpoints

  $smallphone: 415px;
  $tablet: 769px;
  $desktop: 1200px;
*/

import {
  useState,
  useEffect
} from 'react'

const mqString = {
  'desktop': `(min-width: 1200px)`,
  'from-tablet':  `(min-width: 769px)`,
  'tablet':  `(min-width: 769px) and (max-width: 1199px)`,
  'till-tablet':  `(max-width: 768px)`,
  'from-large-phone': `(min-width: 415px)`,
  'large-phone': `(min-width: 415px) and (max-width: 768px)`,
  'till-large-phone': `(max-width: 414px)`,
  'small-phone': `(max-width: 414px)`
}

function useMQ (deviceOption) {
  const queryString = mqString[deviceOption || '']

  if (!queryString)
    throw new Error(`useMQ custom hook error - device option "${deviceOption}" not supported`)
  
  const [isMatched, setIsMatched] = useState(false)
  const checkIfMatches = () => {
    if (window.matchMedia(queryString).matches)
      setIsMatched(true)
    else
      setIsMatched(false)
  }

  useEffect(() => {
    window.addEventListener('resize',checkIfMatches)
    checkIfMatches()

    return () => {
      window.removeEventListener('resize', checkIfMatches)
    }
  }, [])

  return isMatched
}

export default useMQ