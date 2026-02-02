import "./globals.css";
import Header from './components/header'
import Footer from './components/footer'
import { Metadata } from "next";

export const metadata:Metadata = {
  verification: {
    google:  "-6zSAxAkd5NlnHJ6hqgMee2l7hOQZIYraJQT7TJkg6k"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
           <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-543LHCXC');`}</script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
              <noscript>
                {`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-543LHCXC"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
              </noscript>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
