import React    from "react"
import { Link } from "react-router-dom"

const JollyEdition = () => {
    return(
        <React.Fragment>
        <header className="banner">
            <section className="girdle">
            <h1><Link to="/">Tom Hart</Link> / <Link to="/work">Work</Link> / Jolly Edition</h1>
            </section>
        </header>
        <section className="meat">
            <section className="girdle">
            <h2>Selling Art</h2>
            <p>If there's one thing we can agree to disagree on it's the price we pay for art; the highest price for a living artist's work was for Jeff Koons' stainless steel scultpure: <em>$91-million</em> <sup><a href="#koons">1</a></sup>. Laura Shema painted for Jeff Koons early in her career alongside private commissions for wedding-centric projects for clients the world over. After hundreds of projects she needed a website versatile enough to offer a range of quality products and services yet confident enough to be sparing in its aesthetic.</p>
            <h3>Content Management System</h3>
            <p>Wordpress, her CMS of choice, does a good job for Laura; easy to maintain, extensible should she need it, and customizable when my help is asked for.</p>
            <h3>Advanced Custom Fields</h3>
            <p>Much of the heavy lifting is made easier using the wonderful ACF plugin. After setting up custom post types in Wordpress, ACF has an array of field groups ready to be applied to extend the basic Wordpress offering to advance Laura's specific needs when cataloguing her work. </p>
            <h3>Authentic in Style</h3>
            <p>After 25 years studying fine art, there's not much I can do to elevate Laura's reputation other than crafting an authentic look and feel in her website. By crafting a personale, professional interface with tasteful typography and a limited palette, we can shift the focus from the noise of the interface to the superb artwork she makes. </p>
            <footer>
                <h6>References</h6>
                <ul>
                    <li id="koons">[1] <a href="https://www.npr.org/2019/05/16/723888420/jeff-koons-rabbit-fetches-91-million-auction-record-for-work-by-living-artist">Jeff Koons' 'Rabbit' Fetches $91 Million, Auction Record For Work By A Living Artist</a></li>
                </ul>
            </footer>
            </section>
        </section>
        </React.Fragment>
    )
}
export default JollyEdition
