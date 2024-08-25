import '@/styles/globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {children}
      </body>
    </html>
  )
}
// this is the root layout its the bed rock of what thetailwind css and all others will be
//
