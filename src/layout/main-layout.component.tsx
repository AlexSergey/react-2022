import { ReactNode } from 'react';

export const MainLayoutComponent = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex">
      <div className="m-auto">{children}</div>
    </div>
  );
};
