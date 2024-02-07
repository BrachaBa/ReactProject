import BusinessData from '../BusinessData/BusinessData'
import ServiceList from '../Services/ServicesList'

function UserHome() {

    return (
        <div>
            <BusinessData isAdmin={false} />
            <br />
            <br />
            <ServiceList isAdmin={false} />
        </div>
    )
}

export default UserHome
