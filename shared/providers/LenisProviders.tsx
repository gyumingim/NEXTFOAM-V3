// shared/providers/LenisProvider.tsx
'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: ReactNode;
}

// 전역 Lenis 인스턴스 저장
let globalLenis: Lenis | null = null;

export const LenisProvider = ({ children }: LenisProviderProps) => {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Lenis 인스턴스 생성 (한 번만)
    if (!globalLenis) {
      globalLenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      // html에 lenis 클래스 추가 (CSS 스타일링용)
      document.documentElement.classList.add('lenis');
    }

    // RAF 루프 시작
    function raf(time: number) {
      globalLenis?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // 클린업
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      // 전체 앱 언마운트 시에만 destroy
      if (globalLenis) {
        globalLenis.destroy();
        globalLenis = null;
        document.documentElement.classList.remove('lenis');
      }
    };
  }, []);

  return <>{children}</>;
};

// Lenis 인스턴스에 접근하는 유틸 함수들
export const getLenis = () => globalLenis;

export const scrollTo = (target: string | number, options?: any) => {
  globalLenis?.scrollTo(target, options);
};

export const stopScroll = () => {
  globalLenis?.stop();
};

export const startScroll = () => {
  globalLenis?.start();
};