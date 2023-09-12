import { FC, PropsWithChildren } from 'react';
import { Header } from './Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}
