import pic from '../assets/imgs/hamburger.svg'

export function AppHeader() {
    return (
        <section className="app-header">
            <section className='nav-links'>
                <span>myteam</span>
                <nav>
                    <a href="#">home</a>
                    <a href="#">about</a>
                </nav>
            </section>
            <img src={pic} alt="" />
            <button>contact us</button>
        </section>
    )
}