// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LenisProvider } from '@/shared/providers/LenisProviders';
import { Toaster } from 'sonner';
import './globals.css';
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../shared/assets/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Smooth Scroll with Lenis',
  description: 'Next.js + Lenis 부드러운 스크롤',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        {/* 🔥 여기서 LenisProvider로 감싸면 전체 앱에 적용됨 */}
        <LenisProvider>
          {children}
          <Toaster position="bottom-center" richColors />
        </LenisProvider>
      </body>
    </html>
  );
}
