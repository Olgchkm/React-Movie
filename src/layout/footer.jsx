function Footer(){
    return(
        <footer className="page-footer teal darken-3">
            <div className="footer-copyright">
                <div className="container">
                    ©️ {new Date().getFullYear()} Olga Chekmareva
                    <a href="!#" className="grey-text text-lighten-4 right">Repository</a>
                </div>
            </div>
        </footer>
    );
}
export {Footer};