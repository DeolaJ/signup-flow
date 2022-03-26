import { FC, useState } from 'react';

import SignupForm from '../../../../Auth/Shared/SignupForm';
import OnboardingSummary from '../OnboardingSummary';
import Pagination from '../Pagination';
import Roles from '../Roles';

import { OnboardingContentContainer } from './onboarding.content-styled';

const OnboardingContent: FC = () => {
  const [stage, setStage] = useState(2);
  return (
    <OnboardingContentContainer>
      {stage === 1 && <SignupForm nextStage={() => setStage(2)} />}
      {stage === 2 && <Roles />}
      {stage === 3 && <OnboardingSummary />}
      {stage !== 1 && (
        <Pagination currentStage={stage} totalStages={3} setCurrentStage={setStage} />
      )}
    </OnboardingContentContainer>
  );
};

export default OnboardingContent;
