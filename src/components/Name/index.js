import React, { useState } from 'react';
import styles from './Name.module.css';

export default React.memo(() => {
  const [name, setName] = useState('');

  return (
    <label className={styles.header_name} htmlFor="name">
      <input
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled"
      />
    </label>
  );
});
