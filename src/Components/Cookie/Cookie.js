import MUICookieConsent from 'material-ui-cookie-consent';

import React from 'react'

export default function Cookies() {
  return (
<MUICookieConsent 
  cookieName="matrixShopCookieConsent"
  componentType="Dialog"
  title="Wir verwenden Cookies"
  message=" 
  MatrixShop verwendet Cookies, die für das gute Funktionieren der Website notwendig sind. Andere Arten von Cookies können verwendet werden, um Ihre Nutzererfahrung zu personalisieren, personalisierte kommerzielle Angebote anzuzeigen oder Analysen zur Optimierung unseres Angebots durchzuführen. Ihre Einwilligung kann jederzeit über den Link „Cookie-Richtlinien“ widerrufen werden. "
  actions="Datenschutzrichtlinien lesen"
  acceptButtonLabel="Akzeptieren"
/>
  )
}





