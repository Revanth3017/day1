import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const UserProfile = props => {
  const {UserDetails} = props
  const {imageUrl, Name, Company, Logo} = UserDetails

  return (
    <li className="bg-container">
      <div className="image-container">
        <img src={imageUrl} className="avatar" alt="avatar" />
        <img src={Logo} className="Logo" alt="logo" />
      </div>
      <div className="about">
        <h1 className="heading">{Name}</h1>
        <p className="paragraph">{Company}</p>
        <p className="read">read more</p>
      </div>
    </li>
  )
}

export default UserProfile
