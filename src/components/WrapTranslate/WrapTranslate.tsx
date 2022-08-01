import React, { useMemo } from 'react';
import { TranslateContext } from '@/translate/TranslateContext';
import { useAppSelector } from '@/src/redux';

export const WrapTranslate = ({ children }: { children: React.ReactElement }) => {
  const lang = useAppSelector(state => state.settings.lang);
  const value = useMemo(() => ({ lang }), [ lang ]);

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  )
};
