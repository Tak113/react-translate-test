import './gnav.scss';

function Gnav(props) {
  return (
      <div className="gnav">
        <a className="logo" href="https://shop.mionosuke.com"><img src={`${process.env.PUBLIC_URL}/logo-mionosuke.png`} alt="mionosuke" /></a>
        <ul>
          <li><a href="https://shop.mionosuke.com/collections/">COLLECTIONS</a></li>
          <li><a href="https://shop.mionosuke.com/collections/special-order">SPECIAL ORDER</a></li>
        </ul>
      </div>
  )
}

export default Gnav;
