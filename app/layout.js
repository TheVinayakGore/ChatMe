import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChatMe - Chat with your friends",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              disableTransitionOnChange={true}
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
