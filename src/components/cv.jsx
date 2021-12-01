import React    from "react"
import { Link } from "react-router-dom"

const CV = () => {
  return (
    <>
    <section className="card">
      <img src="https://jollyedition.com/wp-content/themes/2020/library/images/logo/je-logo.svg" alt="Jolly Edition" className="card-logo" />
      <h3>Founder <br /><a href="https:jollyedition.com">Jolly Edition</a></h3>
      <span className="year">2012–2022</span>
      <dl>
        <dt>Marketing & Sales</dt>
        <dd>Conveying the prestige of a truly unique, highly sought-after artist.</dd>
        <dt>Interface Design & Web Development</dt>
        <dd>Reinforcing trust through highly personable presentation of quality content.<br /> <mark>Reactjs • HTML5 • CSS3 • SASS • JavaScript • version control (git) • Wordpress • Adobe Creative Suite...</mark></dd>
        <dt>Logistics</dt>
        <dd>Quickly and efficiently organizing outside vendors' work to arrive safely in our client's hands.</dd>
        <dt>Project Management</dt>
        <dd>Making each client feel valued and heard. Maintaining a practical and realistic sense of progress using clear, honest communication.</dd>
        <dt>Strategy</dt>
        <dd>Defining the future of the company.</dd>
      </dl>
    </section>
    <section className="card">
      <img src="../img/10to8.png" alt="10to8" className="card-logo" />
      <h3>Senior UI Designer & Web Developer<br /><a href="https://10to8.com/">10to8</a></h3>
      <span className="year">2012</span>
      <dl>
        <dt>Branding</dt>
        <dd>Identifying the core values of the start up; formalizing how that looked and felt.</dd>
        <dt>Product</dt>
        <dd>Wireframing, developing the product and public (website) interfaces for the company.</dd>
      </dl>
    </section>
    <section className="card">
      <img src="../img/abcam.svg" alt="Abcam" className="card-logo" />
      <h3>Web Designer<br /><a href="https://abcam.com/">Abcam</a><br /></h3>
      <span className="year">2011</span>
      <dl>
        <dt>Public Website</dt>
        <dd>Improving a billion-dollar ecommerce website built on an archaic foundation.</dd>
      </dl>
    </section>
    <section className="card">
      <img src="../img/blacklight.png" alt="BlackLight Software" className="card-logo" />
      <h3>Web Designer<br /><a href="https://www.blacklight-software.com/">BlackLight Software</a><br /></h3>
      <span className="year">2010</span>
      <dl>
        <dt>Interface Design</dt>
        <dd>Incremental updates to the public website.</dd>
        <dt>Agency Websites</dt>
        <dd>Microsoft SharePoint public websites for clients.</dd>
      </dl>
    </section>
    </>
  );
};
export default CV;
