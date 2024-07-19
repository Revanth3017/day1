import 'bootstrap/dist/css/bootstrap.min.css'

import UserProfile from './components/UserProfile/index'
import './App.css'

const UserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets-v2.scaler.com/assets/data_science_v2/webp/ramit_sawhney-8fef1d7213d625a64a99b4c24b5c98cf2a61efce32cc37d099a5b7f009c5cf27.webp.gz',
    Name: 'Ramit Sawhney',
    Company: 'Tower',
    Logo:
      'https://assets-v2.scaler.com/assets/academy/svg/linkedin-d172807157222c7b89ba834569e904401eaff62221bc2d89ef7b330acc52a563.svg.gz',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets-v2.scaler.com/assets/data_science_v2/webp/pawan_kumar-f5cb80087335b1a6da9a5a52f2d9134ec8c51c2b39a9390cfcab8d804311c10c.webp.gz',
    Name: 'Pawan Kumar',
    Company: 'Linkedin',
    Logo:
      'https://assets-v2.scaler.com/assets/academy/svg/linkedin-d172807157222c7b89ba834569e904401eaff62221bc2d89ef7b330acc52a563.svg.gz',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets-v2.scaler.com/assets/data_science_v2/webp/bhavik-a0257d893d784d82e4c30713fbb83461916875ec4a70d2602162faaf41213359.webp.gz ',
    Name: 'Bhavik Rasyara',
    Company: 'BCG',
    Logo:
      'https://assets-v2.scaler.com/assets/academy/svg/linkedin-d172807157222c7b89ba834569e904401eaff62221bc2d89ef7b330acc52a563.svg.gz',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://assets-v2.scaler.com/assets/data_science_v2/webp/yash_mimani-6ef2b57302eef53f735c1cf18242b7c6aeabeb0f11e16cbef5734d076e99f0b3.webp.gz ',
    Name: 'Yash Mimani',
    Company: 'Mckinsey&Company',
    Logo:
      'https://assets-v2.scaler.com/assets/academy/svg/linkedin-d172807157222c7b89ba834569e904401eaff62221bc2d89ef7b330acc52a563.svg.gz',
  },
]
const App = () => (
  <div className="background">
    <div className="background-container">
      <div className="top-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="user-list">
                Our top-notch advisors hold us accountable.
              </h1>
              <p className="advisors">
                Our top-notch advisors ensure our commitment to excellence.With
                their guidance,we maintain the highest standards in our Data
                science course,ensuring your success.
              </p>
            </div>
          </div>
        </div>

        <ul className=" advisers">
          {UserDetailsList.map(eachItem => (
            <UserProfile UserDetails={eachItem} key={eachItem.uniqueNo} />
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default App
