import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            if (localStorage.getItem('consentMode') === null) {
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'denied',
                'functionality_storage': 'denied',
                'security_storage': 'denied',
              });
            } else {
              gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
            }

            if (localStorage.getItem('userId') != null) {
              window.dataLayer.push({
                'user_id': localStorage.getItem('userId')
              });
            }
          `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img
                height="1"
                width="1"
                style="display:none;"
                alt=""
                src="https://px.ads.linkedin.com/collect/?pid=4713649&fmt=gif"
              />`,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
