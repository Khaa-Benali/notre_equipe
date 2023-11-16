import UserCard from './Carte';
import './UserList.css'; 
const UserList = ({ users }) => {
    return (
      <div className="list-container">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    );
  };
  export default UserList;