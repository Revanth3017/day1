import UserProfile from './components/UserProfile/index'
import './App.css'

const UserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    Name: 'John',
    Job: 'Frontend developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    Name: 'John',
    Job: 'Frontend developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    Name: 'John',
    Job: 'Frontend developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    Name: 'John',
    Job: 'Frontend developer',
  },
]
const App = () => (
  <div className="top-section">
    <h1 className="user-list">Users List</h1>
    <ul>
      {UserDetailsList.map(eachItem => (
        <UserProfile UserDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
