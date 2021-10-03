import React, {
  useState
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
  initialAmount = 0,
  classes = '',
  isSmall = false,
  disableInput = false,
  min = 0,
  max = 99,
  onChange = null
}) {
  const [amount, setAmount] = useState(initialAmount);

  // callbacks
  const setAndTriggerOnChange = v => {
    setAmount(v)

    onChange && onChange(v)
  };

  const onInputChange = ({ target }) => {
    const newVal = target.value

    if (newVal === '') {
      setAmount('')
      return;
    }

    if (!isNumber(newVal) ||
      !isWithinRange(newVal, min, max))
      return;

    const numVal = Number(newVal)
    setAndTriggerOnChange(numVal);
  }

  const onInputBlur = () => {
    if (amount === '')
      setAndTriggerOnChange(0);
  };

  const increment = () => {
    const current = amount;

    if (current < max)
      setAndTriggerOnChange(current + 1);
  };
  const decrement = () => {
    const current = amount;

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
        value={amount}
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
