// components/CallButton.tsx
'use client';

import { ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

type Props = {
  source: string;
  className?: string;
  children: ReactNode;
};

export default function CallButton({ source, className, children }: Props) {
  return (
    <a
      href="tel:+32485031877"
      className={className}
      onClick={() => trackEvent('phone_click', { source })}
    >
      {children}
    </a>
  );
}
