import Script from 'next/script'
 
export default function GoogleAnalyticsTag() {
  return (
    <>
      <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-7XD03E57PD" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-7XD03E57PD');
        `}
      </Script>
    </div>
    </>
  )
}