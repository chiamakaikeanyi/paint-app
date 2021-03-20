import React from 'react';
import styles from './RefreshButton.module.css';

/**
 * @param {func} cb callback function
 * @returns
 */
export default React.memo(({ cb }) => {
  return (
    <button className={styles.button_refresh_colors} onClick={cb}>
      &#8634;
    </button>
  );
});
