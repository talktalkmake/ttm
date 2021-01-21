import React    from "react"
import { Link } from "react-router-dom"

const Work = () => {
    return(
        <React.Fragment>
        <header className="banner">
            <section className="girdle">
            <h1><Link to="/">Tom Hart</Link> / Work</h1>
            </section>
        </header>
        <section className="meat">
            <section className="girdle">
              <dl>
                <dt><Link to="/work/unbeaten-run">Unbeaten Run</Link></dt>
                <dd>Reactjs game making extensive use of <mark>React</mark> <mark>Redux</mark> state management.</dd>
                <dt><Link to="/work/jolly-edition">Jolly Edition</Link></dt>
                <dd>Portfolio website using <mark>Wordpress</mark>.</dd>
              </dl>
            </section>
        </section>
        </React.Fragment>
    )
}
export default Work
