import React, { useState, useEffect } from 'react';
import { ExperimentScreen } from './types';
import { ConsentScreen } from './components/ConsentScreen';
import { CartPage } from './components/CartPage';
import { DebriefScreen } from './components/DebriefScreen';

export default function App() {
  const [screen, setScreen] = useState<ExperimentScreen>('consent');
  const [variant, setVariant] = useState<string>('A');

  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const v = searchParams.get('v');
      if (v) {
        setVariant(v.toUpperCase());
      } else {
        setVariant('A');
      }
    } catch {
      setVariant('A');
    }
  }, []);

  switch (screen) {
    case 'consent':
      return <ConsentScreen onConsent={() => setScreen('cart')} />;

    case 'cart':
      return <CartPage onCheckOut={() => setScreen('debrief')} />;

    case 'debrief':
      return <DebriefScreen variant={variant} />;

    default:
      return null;
  }
}
