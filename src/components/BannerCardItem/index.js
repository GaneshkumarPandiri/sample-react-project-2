import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <h1 className="main-heading">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button-style" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
