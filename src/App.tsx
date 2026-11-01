import React, { useState } from 'react';
import { ExperimentScreen } from './types';
import { ConsentScreen } from './components/ConsentScreen';
import { CartPage } from './components/CartPage';
import { DebriefScreen } from './components/DebriefScreen';

export default function App() {
  const [screen, setScreen] = useState<ExperimentScreen>('consent');

  switch (screen) {
    case 'consent':
      return <ConsentScreen onConsent={() => setScreen('cart')} />;

    case 'cart':
      return <CartPage onCheckOut={() => setScreen('debrief')} />;

    case 'debrief':
      return <DebriefScreen />;

    default:
      return null;
  }
}
