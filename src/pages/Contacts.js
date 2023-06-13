
function Contacts () {
    return (
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kemer, Turkey</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+88008008080">+7 (800) 800-80-80</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:vladislav.e.khasanov@gmail.com">vladislav.e.kasanov@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    )
}

export default Contacts;