class CustomFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //const shadow = this.attachShadow({ mode: "open" })
        this.innerHTML = '<footer><div class="container"><div><img src="/assets/images/gapeewy_logo_light.png" style="height: 48px;"><p></p></div><div class="footer-link-container"><div><h6 style="margin-bottom: 16px;">Gapeewy</h6><a style="margin: 0; text-decoration: none; color: white;" href="aboutus.html">About us</a><p style="margin: 0;">FAQ</p></div><div><h6 style="margin-bottom: 16px;">Contact us</h6><a href="mailto:gapeewy@gmail.com" style="margin: 0; text-decoration: none; color: white;">gapeewy@gmail.com</a></div></div></div></footer>';
    }
}

customElements.define("app-footer", CustomFooter);