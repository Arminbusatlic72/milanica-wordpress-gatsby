import React, { useState, useEffect } from "react"

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consentMode = JSON.parse(localStorage.getItem("consentMode"))
    if (consentMode === null) {
      setVisible(true)
    } else {
      // Add the GTM script if consent has already been given
      if (consentMode.analytics_storage === "granted") {
        loadGtmScript()
      }
    }
  }, [])

  const hideBanner = () => {
    setVisible(false)
  }

  const setConsent = consent => {
    const consentMode = {
      functionality_storage: consent.necessary ? "granted" : "denied",
      security_storage: consent.necessary ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
      analytics_storage: consent.analytics ? "granted" : "denied",
      personalization_storage: consent.preferences ? "granted" : "denied",
    }
    localStorage.setItem("consentMode", JSON.stringify(consentMode))
    if (consent.analytics) {
      loadGtmScript()
    } else {
      removeGtmScript()
    }
    if (window.gtag) {
      window.gtag("consent", "update", consentMode)
    }
  }

  const loadGtmScript = () => {
    if (document.getElementById("gtm-script")) {
      return
    }

    const scriptContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NNZWTDV6');`

    const script = document.createElement("script")
    script.id = "gtm-script"
    script.textContent = scriptContent
    document.head.appendChild(script)

    const noscript = document.createElement("noscript")
    noscript.id = "gtm-noscript"
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNZWTDV6"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `
    document.body.appendChild(noscript)

    // Test event to verify GTM functionality
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "testEvent",
      eventCategory: "GTM Test",
      eventAction: "Test Load",
      eventLabel: "GTM Script Loaded",
    })
  }

  const removeGtmScript = () => {
    const script = document.getElementById("gtm-script")
    if (script) {
      document.head.removeChild(script)
    }

    const noscript = document.getElementById("gtm-noscript")
    if (noscript) {
      document.body.removeChild(noscript)
    }
  }

  if (!visible) {
    return null
  }

  return (
    <div id="cookie-consent-banner" className="cookie-consent-banner">
      <div className="global-wrapper">
        <h3>Cookie settings</h3>
        <p>
          We use cookies to provide you with the best possible experience. They
          also allow us to analyze user behavior in order to constantly improve
          the website for you.
        </p>
        <button
          id="btn-accept-all"
          className="button cookie-consent-button btn-success"
          onClick={() => {
            setConsent({
              necessary: true,
              analytics: true,
              preferences: true,
              marketing: true,
            })
            hideBanner()
          }}
        >
          Accept All
        </button>
        <button
          id="btn-accept-some"
          className="button cookie-consent-button btn-outline"
          onClick={() => {
            setConsent({
              necessary: true,
              analytics: document.getElementById("consent-analytics").checked,
              preferences: document.getElementById("consent-preferences")
                .checked,
              marketing: document.getElementById("consent-marketing").checked,
            })
            hideBanner()
          }}
        >
          Accept Selection
        </button>
        <button
          id="btn-reject-all"
          className="button cookie-consent-button btn-grayscale"
          onClick={() => {
            setConsent({
              necessary: false,
              analytics: false,
              preferences: false,
              marketing: false,
            })
            hideBanner()
          }}
        >
          Reject All
        </button>
        <div className="cookie-consent-options">
          <label className="cookie-consent-banner__label">
            <input
              className="cookie-consent-banner__input"
              id="consent-necessary"
              type="checkbox"
              value="Necessary"
              checked
              disabled
            />
            Necessary
          </label>
          <label className="cookie-consent-banner__label">
            <input
              className="cookie-consent-banner__input"
              id="consent-analytics"
              type="checkbox"
              value="Analytics"
              defaultChecked
            />
            Analytics
          </label>
          <label className="cookie-consent-banner__label">
            <input
              className="cookie-consent-banner__input"
              id="consent-preferences"
              type="checkbox"
              value="Preferences"
              defaultChecked
            />
            Preferences
          </label>
          <label className="cookie-consent-banner__label">
            <input
              id="consent-marketing"
              type="checkbox"
              value="Marketing"
              className="cookie-consent-banner__input"
            />
            Marketing
          </label>
        </div>
      </div>
    </div>
  )
}

export default ConsentBanner
