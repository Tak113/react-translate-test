import './footer.scss';

function Footer(props) {
  return (
      <footer className="gfooter">
        <div className="btn-group">
          <a href="https://shop.mionosuke.com/pages/special-order">Go to Special Order</a>
          <a href="https://shop.mionosuke.com/" className="back">Back to Shop</a>
        </div>
        <a href="https://shop.mionosuke.com/pages/contact">contact</a>
        /
        <a href="https://shop.mionosuke.com/pages/terms">terms & conditions</a>
        <p className="copyright">@MIONOSUKE 2022</p>
      </footer>
  )
}

export default Footer;
