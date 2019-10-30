import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';

export default function Button({
  children,
  className = '',
  pill = false,
  primary = false,
  onMouseUp = noop,
  element = 'button',
  ...buttonProps
}) {
  const El = element;
  console.log('props', buttonProps);
  return (
    <El
      className={classNames('button', className, {
        'button--pill': pill,
        'button--primary': primary
      })}
      {...buttonProps}
      onMouseUp={e => {
        /* having a focus style forces button to catch a sticky focus appearance.
        Blur onMouseUp to release that focus appearance for mouse click only. */
        e.currentTarget.blur();
        onMouseUp(e);
      }}
    >
      <span className="button__contents">{children}</span>
    </El>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pill: PropTypes.bool,
  primary: PropTypes.bool,
  onMouseUp: PropTypes.func,
  element: PropTypes.string
};
