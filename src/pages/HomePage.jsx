import { AppHeader } from "../cmps/AppHeader";
import { BestTalent } from "../cmps/BestTalent";
import { GetStarted } from "../cmps/GetStarted";
import { SuccessStories } from "../cmps/SuccessStories";

export function HomePage() {
    return (
        <section className="home-page main-layout">
            <AppHeader />
            <BestTalent />
            <SuccessStories />
            <GetStarted />
        </section>
    )
}