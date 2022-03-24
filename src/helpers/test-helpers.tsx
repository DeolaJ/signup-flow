import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { RootState } from '../store';
import form, { defaultState as defaultForm } from '../store/reducers/form';
import user, { defaultState as defaultUser } from '../store/reducers/user';

type ReduxRenderOptions = {
  preloadedState?: RootState;
  store?: EnhancedStore;
  renderOptions?: Omit<RenderOptions, 'wrapper'>;
};

function render(
  ui: ReactElement,
  {
    preloadedState = { user: defaultUser, form: defaultForm },
    store = configureStore({
      reducer: {
        form,
        user,
      },
    }),
    ...renderOptions
  }: ReduxRenderOptions = {}
): RenderResult {
  function Wrapper({ children }: { children?: ReactNode }): ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
