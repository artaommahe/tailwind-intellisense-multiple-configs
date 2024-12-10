import { ReactNode } from 'react';
import './new-design.css';

export const NewDesignContainer = ({ children }: { children: ReactNode }) => {
  return <div className="new-design">{children}</div>;
};
