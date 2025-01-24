import './globals.css';
import type { Metadata } from 'next';
import { DynamicIslandNav } from '@/components/layout/dynamic-island-nav';
import { Footer } from '@/components/layout/footer';
import { CalendlyButton } from '@/components/layout/calendly-button';

// Remove Inter font import and use system fonts instead
// This provides better reliability while maintaining a clean look
const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const metadata: Metadata = {
  title: 'AenFinite - Digital Services Agency',
  description: 'Transform your digital presence with AenFinite\'s innovative solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily }}>
        <DynamicIslandNav />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
        <CalendlyButton />
      </body>
    </html>
  );
}