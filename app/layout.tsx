// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LenisProvider } from '@/shared/providers/LenisProviders';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
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
  title: '넥스트폼',
  description: '넥스트폼 — CFD 시뮬레이션 소프트웨어 및 컨설팅',
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
        <ThemeProvider>
          <LenisProvider>
            {children}
            <Toaster position="bottom-center" richColors />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
