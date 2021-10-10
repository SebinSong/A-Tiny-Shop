import React, {
  useState,
  useEffect,
  memo
} from 'react'

// child components
import Icon from '@components/global/icon'

import './AmountSelector.scss'

// helpers
const isNumber = v => /^\d+$/g.test(v)
const isWithinRange = (v, min, max) => {
  v = Number(v)

  return v >= min && v <= max
}

function AmountSelector ({
  amount = 0,
  classes = '',
  isSmall = false,
  disableInput = false,
  min = 1,
  max = 99,
  onChange = null
}) {
  const [amountState, setAmountState] = useState(amount);

  // effects
  useEffect(
    () => { setAmountState(amount) }, [amount]
  );

  // callbacks
  const setAndTriggerOnChange = v => {
    setAmountState(v)

    onChange && onChange(v)
  };

  const onInputChange = ({ target }) => {
    const newVal = target.value

    if (newVal === '') {
      setAmountState('')
      return;
    }

    if (!isNumber(newVal) ||
      !isWithinRange(newVal, min, max))
      return;

    const numVal = Number(newVal)
    setAndTriggerOnChange(numVal);
  }

  const onInputBlur = () => {
    if (amountState === '')
      setAndTriggerOnChange(0);
  };

  const increment = () => {
    const current = amountState;

    if (current < max)
      setAndTriggerOnChange(current + 1);
  };
  const decrement = () => {
    const current = amountState;

    if (current > min)
      setAndTriggerOnChange(current - 1);
  };

  // etc
  const classStr = [
    'amount-selector',
    classes,
    isSmall && 'is-small'
  ].filter(Boolean).join(' ')

  return (
    <span className={classStr}>
      <Icon classes="amount-selector__btn plus"
        tag="button"
        onClick={increment}>add</Icon>

      <input className="amount-selector__input"
        type="text"
        value={amountState}
        disabled={disableInput}
        onChange={onInputChange}
        onBlur={onInputBlur} />

      <Icon classes="amount-selector__btn minus"
        tag="button"
        onClick={decrement}>remove</Icon>
    </span>
  )
}

export default AmountSelector
