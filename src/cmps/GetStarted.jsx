import pic from '../assets/imgs/pattern6.svg'


export function GetStarted() {
    return (
        <section className="get-started full">
            <h1>Ready to get started?</h1>
            <button>contact us</button>
            <img src={pic} alt="" />
        </section>
    )
}