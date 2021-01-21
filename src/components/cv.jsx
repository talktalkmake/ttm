import React    from "react"
import { Link } from "react-router-dom"

const CV = () => {
  return (
    <React.Fragment>
      <header className="banner">
        <section className="girdle">
            <h1><Link to="/">Tom Hart</Link> / CV</h1>
        </section>
      </header>
      <section className="meat">
        <section className="girdle">
          <section className="card">
            <img src="https://jollyedition.com/wp-content/themes/2020/library/images/logo/je-logo.svg" alt="Jolly Edition" className="card-logo" />
            <h4>Founder <br /><a href="https:jollyedition.com">Jolly Edition</a></h4>
            <span className="year">2012 onwards</span>
            <h4>Responsibilites include:</h4>
            <dl>
              <dt>Marketing & Sales</dt>
              <dd>Conveying the prestige of a truly unique, highly sought-after artist.</dd>
              <dt>Interface Design & Web Development</dt>
              <dd>Reinforcing trust through highly personable presentation of quality content. <mark>Reactjs, HTML5, CSS3, SASS, JavaScript, version control (git), Wordpress, Adobe Creative Suite...</mark></dd>
              <dt>Logistics</dt>
              <dd>Quickly and efficiently organizing products made by outside vendors to arrive safely in our client's hands.</dd>
              <dt>Project Management</dt>
              <dd>Making each client feel they are the only one we have. Maintaining a practical and realistic sense of progress. </dd>
              <dt>Strategy</dt>
              <dd>Defining the future of the company today so we can seamlessly arrive there a year from now.</dd>
            </dl>
          </section>
          <section className="card">
            <h4>Senior UI Designer & Web Developer<br /><a href="https://10to8.com/">10to8</a></h4>
            <span className="year">2012</span>
            <h4>Responsibilites included:</h4>
            <dl>
              <dt>Branding</dt>
              <dd>Identifying the core values of the start up; formalizing how that looked and felt.</dd>
              <dt>Product</dt>
              <dd>Wireframing, developing the product and public (website) interfaces for the company.</dd>
            </dl>
          </section>
          <section className="card">
            <h4>Web Designer<br /><a href="https://abcam.com/">Abcam</a><br /></h4>
            <span className="year">2011</span>
            <h4>Responsibilites included:</h4>
            <dl>
              <dt>Public Website</dt>
              <dd>Improving a billion-dollar ecommerce website built on an archaic foundation.</dd>
            </dl>
          </section>
          <section className="card">
            <h4>Web Designer<br /><a href="https://www.blacklight-software.com/">BlackLight Software</a><br /></h4>
            <span className="year">2010</span>
            <h4>Responsibilites included:</h4>
            <dl>
              <dt>Interface Design</dt>
              <dd>Incremental updates to the public website.</dd>
              <dt>Agency Websites</dt>
              <dd>Microsoft SharePoint public websites for clients.</dd>
            </dl>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};
export default CV;
