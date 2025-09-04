'use client';
import { useEffect } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function RiveLogo({ variant='idle', className='' }:{ variant?: 'idle'|'hero'|'cta'|'services'|'pricing'|'blog'|'success'|'alert', className?: string }) {
  const reduced = useReducedMotion();
  const { rive, RiveComponent } = useRive({ src: '/mascot.riv', stateMachines: 'TurboSM', autoplay: !reduced });
  const idle = useStateMachineInput(rive, 'TurboSM', 'idle');
  const wave = useStateMachineInput(rive, 'TurboSM', 'wave');
  const point = useStateMachineInput(rive, 'TurboSM', 'point');
  const success = useStateMachineInput(rive, 'TurboSM', 'success');
  const alert = useStateMachineInput(rive, 'TurboSM', 'alert');

  useEffect(()=>{
    if (!rive) return;
    [wave, point, success, alert].forEach(i=> i && (i.value=false));
    if (idle) idle.value = true;
    if (reduced) return;
    switch(variant){
      case 'hero': wave && (wave.value=true); break;
      case 'cta': point && (point.value=true); break;
      case 'services': wave && (wave.value=true); break;
      case 'pricing': point && (point.value=true); break;
      case 'blog': wave && (wave.value=true); break;
      case 'success': success && (success.value=true); break;
      case 'alert': alert && (alert.value=true); break;
    }
  },[rive, variant, reduced, wave, point, success, alert, idle]);

  return <div className={className}><RiveComponent /></div>;
}
