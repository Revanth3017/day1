import './index.css'

const UserProfile = props => {
  const {UserDetails, key} = props
  const {imageUrl, Name, Job} = UserDetails

  return (
    <li className="bg-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="about">
        <h1 className="heading">{Name}</h1>
        <p className="paragraph">{Job}</p>
      </div>
    </li>
  )
}

export default UserProfile
