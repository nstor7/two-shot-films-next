import "./globals.css";
import Header from './components/header'
import Footer from './components/footer'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-1E8CEW78BM"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-1E8CEW78BM');`}
        </script> */}
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
