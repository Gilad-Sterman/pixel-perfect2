import picKady from '../assets/imgs/avatar-kady.jpg'
import picAiysha from '../assets/imgs/avatar-aiysha.jpg'
import picArthur from '../assets/imgs/avatar-arthur.jpg'
import quotePic from '../assets/imgs/icon-quotes.svg'

export function SuccessStories() {
    return (
        <section className="success-stories full">
            <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
            <section className="review-container">
                <article className="review">
                    <img className='quote-pic' src={quotePic} alt="" />
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h3>Kady Baker</h3>
                    <h5>Product Manager at Bookmark</h5>
                    <img className='avatar-pic' src={picKady} alt="" />
                </article>
                <article className="review">
                    <img className='quote-pic' src={quotePic} alt="" />
                    <p> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <h3>Aiysha Reese</h3>
                    <h5>Founder of Manage</h5>
                    <img className='avatar-pic' src={picAiysha} alt="" />
                </article>
                <article className="review">
                    <img className='quote-pic' src={quotePic} alt="" />
                    <p> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <h3>Arthur Clarke</h3>
                    <h5>Co-founder of MyPhysio</h5>
                    <img className='avatar-pic' src={picArthur} alt="" />
                </article>
            </section>
        </section>
    )
}