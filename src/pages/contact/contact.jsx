import './contact.css'

export default function Contact() {
    return (
        <>
            <section className="contact-section1">
                <div className="fille">
                    <h1>Une question, une demande <br/>
                        particulière ? Écris-moi, je te <br/>
                        répond avec le cœur et le sourire !
                    </h1>
                    <img src="src/assets/images/contact/personnage.png" alt=""/>
                </div>
            </section>


            <section className="contact-section2">
                <div className="contact-section2_div1">
                    <h1>Me contacter</h1>
                </div>
                
                <div className="contact-section2_div2">
                    <div className="coordonnées">
                        <div id="infos">
                            <img src="src/assets/images/contact\phone.png" alt=""/>
                            <h1> 06.13.50.55.73</h1>
                        </div>
                        <div id="infos">
                            <img src="src/assets/images/map-pinned.png" alt=""/>
                            <h1>Tours nord et alentours</h1>
                        </div>
                    </div>
                </div>

                <div className="form-container">
                    <form>
                        <div className="input-row">
                            <input type="text" placeholder="Nom"/>
                            <input type="text" placeholder="Prenom"/>
                        </div>

                        <input type="email" placeholder="Adresse mail..."/>
                        <input type="text" placeholder="Sujet"/>
                        <textarea placeholder="Message ..."></textarea>

                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </section>

            <section className="contact-section3">
                <div className="icon_reseau1">

                    <a href="https://www.facebook.com/share/177yBt8PgQ/" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/images/contact/facebook.png" alt=""/>
                    </a>

                    <a href="https://www.instagram.com/lesmikatesdebetti/" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/images/contact/instagram.png" alt=""/>
                    </a>

                    <a href="https://youtube.com/@bettinak-desruisseaux?si=9H1zPiBgy27IRKWZ" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/images/contact/youtube.png" alt=""/>
                    </a>
                    
                </div>
                <div className="contact-section3_div2">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1SLGgmSiySorniJ6-ltz1oAhtXC1hD3Y&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
                </div>
                <div className="contact-section3_div2_text">
                    <div className="text">
                    <button className="bouton_bleu"></button>
                    <p>Zone livraison gratuite</p>
                    </div>
                    
                    <div className="text1">
                    <button className="bouton_rouge"></button>
                    <p>Zone livraison payante</p>
                    </div>
                </div>
            </section>
        </>
    )
}