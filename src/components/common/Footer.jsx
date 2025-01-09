import React from "react";
import { footerLinks } from "../../utils/Footer/footerLinks";
import { contactInfo } from "../../utils/Footer/contactInfo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            {footerLinks.map((section, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget-title">{section.title}</h6>
                <div className="footer-widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.href}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            ))}

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-contact">
              <h6 className="footer-widget-title">Quick Contact</h6>
              <div className="footer-widget-content">
                <p className="mb-20">If you have any questions or need help, feel free to contact with our team.</p>
                <div className="contact__number d-flex align-items-center mb-30">
                  <i className="icon-phone"></i>
                  <a href={`tel:${contactInfo.phone}`} className="color-primary">{contactInfo.phone}</a>
                </div>
                <p className="mb-20">{contactInfo.address}</p>
                <a href={contactInfo.directionsLink} className="btn__location">
                  <i className="icon-location"></i>
                  <span>Get Directions</span>
                </a>
              </div>
              <ul className="social-icons list-unstyled mt-2">
                {contactInfo.socialLinks.map((social, i) => (
                  <li key={i}>
                    <a href={social.url}>
                      <i className={social.icon} style={social.iconStyle}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
              <h6 className="footer-widget-title">
                <a href={contactInfo.directionsLink} className="btn__location">
                  <i className="icon-location"></i>
                  <span>Get Directions</span>
                </a>
              </h6>
              <div className="footer-widget-content">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  height="230"
                  style={{ border: 0, maxWidth: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="latest-update" style={{ textAlign: "center" }}>
            <p className="text-white mb-0">Last Updated : 26 December, 2024 - 11:10 AM</p>
            <h4 className="color-white" style={{ fontSize: "16px", fontWeight: "500" }}>Visitors: 0000</h4>
          </div>
        </div>
      </div>
      <div className="footer-copyrights">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
              <nav>
                <ul className="copyright__nav d-flex flex-wrap list-unstyled mb-0">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </nav>
              <p className="mb-0">
                <span className="color-gray">&copy; 2024 AGCL, All Rights Reserved.</span>
                <a href="#" style={{ color: "#fff" }}>Web.com(India) Pvt Ltd</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
