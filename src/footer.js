import './footer.scss';

function Footer(props) {
  return (
      <footer className="gfooter">
        <p className="back"><a href="https://shop.mionosuke.com/">Back to Shop</a></p>
        <a href="https://shop.mionosuke.com/pages/contact">contact</a>
        /
        <a href="https://shop.mionosuke.com/pages/terms">terms & conditions</a>
        <p className="copyright">@MIONOSUKE 2022</p>
      </footer>
  )
}

export default Footer;
