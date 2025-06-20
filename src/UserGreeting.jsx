import Card from './Card.jsx';

function UserGreeting({isLoggedIn}){

    return(isLoggedIn ? <Card name="Liam" age={12} info="text" /> : <h2>Please Log in</h2>);
};
export default UserGreeting;