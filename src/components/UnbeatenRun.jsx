import React    from "react"
import { Link } from "react-router-dom"

const UnbeatenRun = () => {
    return(
        <>
        <h2>Unbeaten Run</h2>
        <p className="lede">Reactjs game making extensive use of <mark>React</mark> <mark>Redux</mark> state management.</p>
        <p>Like most projects that end up being important, Unbeaten Run started as an excuse for two buddies to work together on something fun. This was back in 2000-and-something when we were much younger and much less experienced. We had this idea that we could make a predominantly online game as the soccer manager of imaginary teams packed with personality and data. It wasn't an original idea but we had complementary skills and interests that we thought would at least be worth spending mutual evenings and weekends on. We called it <em>Unbeaten Run</em>.</p>
        <h3>Premise</h3>
        <p>Soccer is largely a game of power and data. Teams exude and enforce power by virtue of having more money, better players, and more fans. Masses of data pile up over time and quietly form unexpected patterns. These patterns, when observed carefully, become the device through which good managers realize success over time.</p>
        <p>Our fascination has been creating that pattern for players to observe and interface with through an immersive, fun game. We do not wish to (nor could we) recreate an immaculate world that parrallels reality, instead I like to imagine the game world to include soccer but to otherwise be another universe.</p>
        <h4>Scope</h4>
        <p>The game should be publicly accessible to users in its first version as a single-player game. The player takes charge of a given team and controls the overall direction of it, including: players, matches, staff, transfers, and broadly the financial well-being of the club.</p>
        <h4>Teams and Regions</h4>
        <p>Every region in the game is seeded from some distant part of history; each team in the game is fabricated with imagined cultural and historical influences. Boiling down aeons of history into four pots is daunting and impossible to get right (not to mention my own Western prejudice, complete with huge blind-spots), but we need four regions. I specified those as:</p>
        <dl>
            <dt>Brittanic</dt>
            <dd>I coudln't leave out the birthplace of the sport.</dd>
            <dt>Byzantine</dt>
            <dd>The entirety of what we know as Southern Europe, Northern Africa, and the Middle East. </dd>
            <dt>Prussia</dt>
            <dd>By and large, all of Northern Europe, Russia, Scandinavia. Much of sports teams' identites come from Socialist ideals: industry and organization being the elements which bring collective success. Like it or not, that sentiment is effective in describing almost all great sporting achievement. Plus they make for great posters.</dd>
            <dt>Inca</dt>
            <dd>If Pangea <sup><a href="#pangea">1</a></sup> hadn't dispersed itself across the globe, I like to think the dominant cultural region would be a combination of Africa, South-, and North-America. If <em>UR</em> had more than four leagues, splitting Inca into several would still be too small a nod to how diverse and rich each continent's identities are.</dd>
        </dl>
        <h3>Power and Data</h3>
        <p>All teams want to win games and trophies, but 'big' teams have the highly-rated players who ultimately score goals and win mathces. The question is whether the teams expected to win can do so, or more interestingly, whether smaller teams with lower chances of success can overcome the odds. This is the influence, and ultimately, the success or failure of managers.</p>
        <h4>Power Through Data</h4>
        <p>'Big' teams have expectations of success. The advantage of being a 'small' team is the limited weight of expectation and its freedom from that burden. The interesting sporting achievements are ones where seemingly too much has been achieved by an overlooked minnow. Think <em>Moneyball</em> <sup><a href="#moneyball">2</a></sup>. Harnessing data is the way organizations build and maintain a knowledge gap against their rivals; the greater the detail, the greater the sophistication of the analyst, the more powerful the result of the data's use. That's the crux of <em>UR's</em> objective: gather, study, and act on data and your chances of success increase.</p>
        <footer>
            <h6>References</h6>
            <ul>
                <li id="pangea">[1] <a href="britannica.com/place/Pangea">Pangea | Definition, Map, History, & Facts | Britannica</a></li>
                <li id="moneyball">[2] <a href="https://www.goodreads.com/book/show/1301.Moneyball">Moneyball: The Art of Winning an Unfair Game by Michael Lewis</a></li>
            </ul>
        </footer>
        </>
    )
}
export default UnbeatenRun
