import React from "react";
import "../../sass/Footer.scss"

const Footer = () => {
  return (
    <div className="Footer">
      <h1 style={{ color: "green", textAlign: "left"}}>
        Matrix Shop
      </h1>
      <p>Dies ist ein <strong>Demoshop</strong> Projektarbeit für <a href="https://digitalcareerinstitute.org/">Digital Career Institute</a> Final Project — Bestellungen werden nicht ausgeführt.</p>
      <div className="Container">
        <div className="Row">
          <div className="Column">
            <div className="Heading">Über uns</div>
            <p><a href="https://github.com/OrhanKadirov">Orhan</a>  & <a href="https://github.com/venskolev">Vens</a> </p>
            <div className="FooterLink">
              <a href="/impressum">Impressum</a>
              </div>
            <div className="FooterLink"><a href="/contact">Hilfe & Kontakt</a></div>
            <div className="FooterLink"><a href="/cookies">Cookies</a></div>
						<div className="FooterLink"><a href="/agb">AGB</a></div>
          </div>
          <div className="Column">
            <div className="Heading">Services</div>
						<p>Gerne für Dich da!</p>
            <p>0800 0800 0800</p>
            <div className="FooterLink"><a href="mailto:services@matrixshop.de">services@matrixshop.de</a></div>
            <div className="FooterLink"><a href="/callback">Kostenloser Rückrufservice</a></div>
          </div>
          <div className="Column">
            <div className="Heading">Richtlinie</div>
            <div className="FooterLink"><a href="/">Datenschutzbestimmungen</a></div>
            <div className="FooterLink"><a href="/">Gesetzliche Zusatzinformationen</a></div>
            <div className="FooterLink"><a href="/">Widerrufsrecht</a></div>
            <div className="FooterLink"><a href="/">Zahlungsarten</a></div>
          </div>
          <div className="Column">
            <div className="Heading">Social Media</div>
            <div className="FooterLink"><a href="/">Facebook</a></div>
            <div className="FooterLink"><a href="/">Instagram</a></div>
            <div className="FooterLink"><a href="/">Twitter</a></div>
            <div className="FooterLink"><a href="/">Youtube</a></div>
          </div>
        </div>
				<span>Copyright © 2022 Matrix-DCI, Studenten.</span>
      </div>
    </div>
  );
};
export default Footer;
