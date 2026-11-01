import React, { useState, useEffect } from 'react';
import { ExperimentScreen, QuestionnaireResponses } from './types';
import { ConsentScreen } from './components/ConsentScreen';
import { CartPage } from './components/CartPage';
import { QuestionnaireScreen } from './components/QuestionnaireScreen';
import { DebriefScreen } from './components/DebriefScreen';

export default function App() {
  const [screen, setScreen] = useState<ExperimentScreen>('consent');
  const [responses, setResponses] = useState<QuestionnaireResponses | null>(null);

  // Read ?v= parameter from URL; as specified, everyone sees Variant A for now
  const [variant, setVariant] = useState<string>('A');

  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const vParam = searchParams.get('v');
      // For now, everyone sees variant A (we still display "A" or reflect the requested variant label as A)
      if (vParam) {
        setVariant('A');
      } else {
        setVariant('A');
      }
    } catch {
      setVariant('A');
    }
  }, []);

  switch (screen) {
    case 'consent':
      return (
        <ConsentScreen
          variant={variant}
          onConsent={() => setScreen('cart')}
        />
      );

    case 'cart':
      return (
        <CartPage
          variant={variant}
          onCheckOut={() => setScreen('questionnaire')}
        />
      );

    case 'questionnaire':
      return (
        <QuestionnaireScreen
          variant={variant}
          onSubmit={(submittedResponses) => {
            setResponses(submittedResponses);
            setScreen('debrief');
          }}
        />
      );

    case 'debrief':
      return (
        <DebriefScreen
          variant={variant}
          responses={responses}
          onRestart={() => {
            setResponses(null);
            setScreen('consent');
          }}
        />
      );

    default:
      return null;
  }
}
