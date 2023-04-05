// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card`}>
      <h1 className="technology">{title}</h1>
      <p className="tech-description">{description}</p>
      <img className="tech-image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
