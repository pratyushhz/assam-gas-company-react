import React from 'react';
import Logo from "../../assets/new-images/logo/Fw_ Company Logo/AGCL_Logo.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {

  const [navItems, setNavItems] = useState({ contactList:[], menuItems: [], additionalMenuData: [] });

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch('http://167.71.235.8/agcl/public/api/home');
        const data = await response.json();
        setNavItems(data);
      } catch (error) {
        console.error("Error fetching nav items:", error);
      }
    };
    
    fetchNavItems();
  }, []);



  return (
    <header className="header header-layout1">
      <div className="header-topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between contact-container">
                <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                  {navItems.contactList.map((contact, index) => (
                    <li key={index} className="emergency-flex">
                      <div className="emergecy-scroll number-scroll">
                        <i className="icon-phone color-primary1"></i>
                        <span id="number-type" className="color-primary1">{contact.type}</span>
                      </div>
                      <Link to="#" id="number-display" className="color-primary1" style={{ color: 'floralwhite' }}>
                        {contact.numbers}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="d-flex align-items-center">
                  <ul className="igg-1 list-unstyled mb-0 mr-20">
                    <li style={{ borderRight: '1px solid #fff', paddingRight: '10px' }}>
                      <Link to="#">Screen Reader Access</Link>
                    </li>
                    <li style={{ borderRight: '1px solid #fff', paddingRight: '10px' }}>
                      <Link to="#">Skip to Main Content</Link>
                    </li>
                  </ul>

                  <div className="font-increase">
                    <button>
                      <Link to="#">A-</Link>
                    </button>
                    <button>
                      <Link to="#">A</Link>
                    </button>
                    <button>
                      <Link to="#">A+</Link>
                    </button>
                  </div>

                  <ul className="social-icons list-unstyled mt-0">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" style={{ background: '#1877F2', color: '#fff' }}></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          className="fab fa-instagram"
                          style={{
                            background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                            color: '#fff'
                          }}
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i style={{ backgroundColor: '#fff' }}>
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVR4nN3VPUjWURQG8J+ZaZ8ihQUSWBBEDoHQIEQ0RRA21dBQQy1BUy65BA1RQ0OD5ODgIIEgGAQtuQgiQYNSSxQk0ncUERTUFnHhDoeX9/9/P5d64A7nuec+93Lvuc/hf8JG7K8y+utcvzXndxcldGABv7AWxmcM1BDvwTIeobMsMQl9xFDgxvLGHSUHu49VbFMHzmMFXTnegEVcLsi/jQ/YqwHM4XqIB/EJByryLuIHDmsQu/LinkORwJ3CU/CHR/P7zWqSaSFL7A5cPO4hkP4jitaxDTuhHgP3ucR+aaxI5fqscCdwbdcmm3BUbzG9sClsrypjbiLqRD3Yj1v3haM4Q9OBe4EXmJLq+KnczlexVvsDHP3MNGK+DB+4kKOb+BBmE+nf4WTzYgP5M+WRKPjPsW5wI3gDfoaEU8V8xyzVUzuYDbE6D23MFOveDK5x1gq8fZKh92EZzhbzwaTue6THxWhmsMO5StNv70Q4/iSO1MtDOJrRXP6jYdli/ZVlKEa2F3QZku72r+Fv+qxR15Nd7c9AAAAAElFTkSuQmCC"
                            alt="twitterx--v2"
                            style={{ maxWidth: '22px' }}
                          />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i style={{ backgroundColor: '#fff' }}>
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpUlEQVR4nO2aP2gUQRSHf4mQ2KiNkBSelkrsYiDk8uYWYpNCjCBXGs8mxCo2YqeJdqbQawSFCBFUiBos1YPYe0HRShIFQUEMWpxREk7MT/b+mJgmO7ezc2t2PnjNLXfzPma5mXnzAIfD4XA4HA6HIx5wEO3sx35m0EfBCSrkqHCOChNUyFNhigoztZilQmFTzG54PlX7znjtN05TYYhp9NBDpz0poKUyqMIoBVcpeESFV1RYogKthWCVgkUqPKfCNAVXKBip5Aa0mJFNo4eCN1bFGovXfq7hZAVZKpRjIBM0yn7Ojcl6OETBcgwkdF/7ZaZxUF9Y4X7Tk29c+q6eLNBKhe9NT7zxKDGLHTqzm4pB0uGiDwd0hDNNTzhsCI7qCOdikXS4GNURnjA6+I3z5ECb7Rme1BGeNjq4z6dF8mLWpvDj4MKCZ8aF6xQL5PBhG9JFnRmej0zY51eZfJAnB/dEKfxBR/h9pMJ1Sl/J/BjptUYh/FNH2OwpaCvezpNn0+alu9AWVLhkVdhnbY2cmyFPpsyNm8auYMKCFevCdVZ+kLfHyYH28ON62Bt0hn83TbiOiWXMw77/R/jjAnnhWLhxe9GRtFd6Z7z/tJ7cIYc6zYwpWA0ku42WpSUd4XdWhL99JidHotl4CBZ0hIt2tpa7zYuuC78ILix4Gunh4VRXdKLrUWju8dDEMhNVIY/bowBwOVklHsGZpBXxvGSVaRVSuoV4s7stu1HyHaADFe7FIHE7Vy2JvExL3HVpIi/EN0KF7kp7gd9mUG03mPM36MbPzlvHFwpeUvCw0n7ht2EodMMm7EUHBUeYwXH2Y5gZjFFwiYJrVLj5t2ml2hvyb1NL9bN6U8stCq5vaGrJVRpl/IYZf6kMWoV0OBwOh8PhcDgQOX8AhY5o3pQDUmoAAAAASUVORK5CYII="
                            alt="youtube-play"
                            style={{ maxWidth: '22px' }}
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>

                  <div className="dropdown lang-dropdown">
                    <button
                      className="dropdown-toggle lang-dropdown-toggle"
                      id="langDropdown"
                      data-toggle="dropdown"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2VPQ6CQBCF51gUngV6Qi23IKHjGkqhDQewBCw8gLh0VFs/M1sZfzoQx7wveclkt5k3OzMrQgghhPwDqASWJDRQ8QXAFnpk7ZYAh7hav6rgGq0Mf2Tee1iSLGnAuQnbbYM0PQTleRPOTBhwbkKS1DifHdr2iq4bQhzH+1lNyFIGtPKacF1fUJanII37/hbuft5Amh7RtkNIPMuOQRrra+idEQPXNwYGGwbyvEHX3V5aSM/07ucNODchjneh57XqOsQa6xCPo4Eh9h/W6JzJ+6UNfEPyTFRsYElCAwVfAGyhR9ZuiYhDXKxf1YhrtDD8kRFCCCFikDtgAlonA0la6QAAAABJRU5ErkJggg=="
                        alt="india"
                      />
                      <span>English</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="langDropdown">
                      <Link to="/" className="dropdown-item" href="#">
                        <span>অসমীয়া</span>
                      </Link>
                      <Link to="/" className="dropdown-item" href="#">
                        <span>हिंदी</span>
                      </Link>
                      <Link to="/" className="dropdown-item" href="#">
                        <span>বাংলা</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg sticky-navbar">
      <div className="container-fluid" style={{ paddingRight: 0 }}>
        <Link to="/" className="navbar-brand">
          <img src={Logo} className="logo" alt="logo" style={{ maxWidth: '240px' }} />
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="menu-lines"><span></span></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavigation">
          <ul className="top-menu-bar">
            {navItems.menuItems.map((menu, index) => (
              <li className="nav__item has-dropdown" key={index}>
                <Link to="javascript:void(0)" className="nav__item-link">{menu.title}</Link>
                {menu.links && menu.links.length > 0 && (
                  <>
                    <button className="dropdown-toggle" data-toggle="dropdown"></button>
                    <ul className="dropdown-menu">
                      {menu.links.map((link, idx) => (
                        <li className="nav__item" key={idx}>
                          <Link to={link.path} className="nav__item-link">{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Additional static menu */}
          <ul className="navbar-nav">
            {navItems.additionalMenuData.map((menu, index) => (
              <li className="nav__item has-dropdown" key={index}>
                <Link to="javascript:void(0)" className="nav__item-link">{menu.title}</Link>
                {menu.links && menu.links.length > 0 && (
                  <>
                    <button className="dropdown-toggle" data-toggle="dropdown"></button>
                    <ul className="dropdown-menu">
                      {menu.links.map((subItem, idx) => (
                        <li className="nav__item" key={idx}>
                          <Link to={subItem.path} className="nav__item-link">{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
