import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.module.css';

/**
 * @param {Array} colors
 * @param {String} activeColor
 * @param {func} setActiveColor
 * @returns
 */
export default function ColorPicker({
  colors = [],
  activeColor,
  setActiveColor
}) {
  if (!colors.length) return null;
  return (
    <fieldset className={styles.color_picker} data-testid="color-fieldset">
      {colors.map((color, i) => (
        <label key={i}>
          <input
            data-testid={color}
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={() => setActiveColor(color)}
          />

          <span
            data-testid={`span-${color}`}
            style={{ backgroundColor: color }}
          />
        </label>
      ))}
    </fieldset>
  );
}

ColorPicker.propTypes = {
  colors: PropTypes.array,
  activeColor: PropTypes.string,
  setActiveColor: PropTypes.func
};
