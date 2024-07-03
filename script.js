class CustomFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //const shadow = this.attachShadow({ mode: "open" })
        this.innerHTML = 
        `
        <footer>
        <div class="container">
            <div>
                <img src="/assets/images/gapeewy_logo_light.png" style="height: 48px; margin-bottom: 32px;">
                <div>
                    <a href="https://www.instagram.com/gapeewy/"><i class="bi bi-instagram text-white"></i></a>
                    <a href="https://x.com/gapeewy"><i class="bi bi-twitter text-white"></i></a>
                    <a href="https://web.facebook.com/gapeewy"><i class="bi bi-facebook text-white"></i></a>
                    <a href="https://www.tiktok.com/@gapeewy"><i class="bi bi-tiktok text-white"></i></a>
                </div>
            </div>
            <div class="footer-link-container">
                <div>
                    <h6 style="margin-bottom: 16px;">Gapeewy</h6>
                    <a style="margin: 0; text-decoration: none; color: white;" href="aboutus.html">About us</a>
                    <p style="margin: 0;">FAQ</p>
                </div>
                <div class="text-end">
                    <h6 style="margin-bottom: 16px;">Contact us</h6>
                    <a class="social-link" href="mailto:gapeewy@gmail.com">gapeewy@gmail.com</a>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define("app-footer", CustomFooter);