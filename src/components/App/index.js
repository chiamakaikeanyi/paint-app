import React, { useState, useEffect, useRef, useCallback } from 'react';
import randomColor from 'randomcolor';
import Canvas from '../Canvas';
import ColorPicker from '../ColorPicker';
import Name from '../Name';
import RefreshButton from '../RefreshButton';
import useWindowSize from '../WindowSize';
import styles from './App.module.css';

export default function App() {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [visible, setVisible] = useState(false);

  let timeoutId = useRef();
  const [windowWidth, windowHeight] = useWindowSize(() => {
    setVisible(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => setVisible(false), 500);
  });

  const headerRef = useRef({ offsetHeight: 0 });

  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then(res => res.json())
      .then(res => {
        setColors(res.colors.map(color => color.hex.value));
        setActiveColor(res.colors[0].hex.value);
      });
  }, []);

  useEffect(() => {
    getColors();
  }, []);

  return (
    <>
      <header
        style={{ borderTop: `10px solid ${activeColor}` }}
        ref={headerRef}
        height={window.innerHeight}
        className={styles.header}
      >
        <Name />

        <div className={styles.color_picker_wrapper}>
          <ColorPicker colors={colors} activeColor={activeColor} setActiveColor={setActiveColor} />
          <RefreshButton cb={getColors} />
        </div>
      </header>

      <main>
        {activeColor && <Canvas color={activeColor} height={window.innerHeight - headerRef.current.offsetHeight} />}
      </main>

      <footer data-testid="window_size" className={`window_size ${visible ? '' : 'hidden'}`}>
        {windowWidth} x {windowHeight}
      </footer>
    </>
  );
}
