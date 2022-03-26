import { FC } from 'react';

import Dashboard from '../dashboard';
import OnboardingContent from './components/OnboardingContent';

const Onboarding: FC = () => {
  return (
    <Dashboard>
      <OnboardingContent />
    </Dashboard>
  );
};

export default Onboarding;
