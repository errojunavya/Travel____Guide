import './index.css'

const LocationItem = props => {
  const {locationDetails} = props
  const {imageUrl, name, description} = locationDetails

  return (
    <li className="list-container">
      <div className="location-card-container">
        <img src={imageUrl} alt={name} className="image" />
        <div className="text-container">
          <h1 className="heading">{name}</h1>
          <p className="para">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default LocationItem
