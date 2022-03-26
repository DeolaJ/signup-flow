import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { doSubmitNewUser } from '../../../../../store/actions/user';
import { selectUserRoles } from '../../../../../store/selectors';

import InvertedButton from '../../../../Shared/Button/InvertedButton';
import SecondaryButton from '../../../../Shared/Button/SecondaryButton';
import SpacedList from '../../../../Shared/SpacedList';

import { PaginationContainer } from './pagination.styled';

type PaginationProps = {
  currentStage: number;
  setCurrentStage: (stage: number) => void;
  totalStages: number;
};

const Pagination: FC<PaginationProps> = ({ currentStage, setCurrentStage, totalStages }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRoles = useSelector(selectUserRoles);

  return (
    <PaginationContainer>
      <SpacedList>
        <InvertedButton
          onClick={() => {
            if (currentStage === 1) return;
            setCurrentStage(currentStage - 1);
          }}
          disabled={currentStage === 1}
          text="Back"
          size="sm"
        />

        {currentStage !== totalStages ? (
          <SecondaryButton
            onClick={() => {
              if (currentStage === totalStages) return;
              if (currentStage === 2 && Object.keys(userRoles?.data || {}).length === 0) return;
              setCurrentStage(currentStage + 1);
            }}
            disabled={currentStage === 2 && Object.keys(userRoles?.data || {}).length === 0}
            text="Next"
            size="sm"
          />
        ) : (
          <SecondaryButton
            onClick={() => dispatch(doSubmitNewUser(navigate))}
            size="sm"
            text="Submit"
          />
        )}
      </SpacedList>
    </PaginationContainer>
  );
};

export default Pagination;
