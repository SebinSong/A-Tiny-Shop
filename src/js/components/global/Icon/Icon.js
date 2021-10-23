import { memo } from 'react'
import { createElement } from 'react';

function Icon ({
  name = '',
  classes = '',
  isBold = false,
  tag = 'span',
  children = '',
  onClick = null
}) {
  return createElement(
    tag, // reason why not using JSX syntax for this component.
    {
      className: [
        'mi',
        isBold && 'mib',
        classes
      ].filter(Boolean).join(' '),
      onClick
    },
    children || name || ''
  )
};

export default memo(Icon);