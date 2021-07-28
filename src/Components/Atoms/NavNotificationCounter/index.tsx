type NavNotificationCounterProps = {
    count: Number
}

const NavNotificationCounter = ({ count }:NavNotificationCounterProps):JSX.Element => <div>{ count }</div>

export default NavNotificationCounter;