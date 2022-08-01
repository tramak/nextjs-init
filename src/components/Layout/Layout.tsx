import React from 'react';
import { useRouter } from 'next/router';
import { Footer, Header } from '@/src/ui';
import { actions, useAppSelector } from '@/src/redux';
import { langs } from '@/translate/data';

export interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth.tokens);
  const lang = useAppSelector(state => state.settings.lang);

  const logout = () => {
    actions.auth.logout();
    router.push('/');
  };

  return (
    <>
      <div className="content">
        <Header
          isLogin={!!auth}
          logout={logout}
          langs={langs}
          lang={lang}
          changeLang={actions.settings.setLang}
        />

        {children}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
