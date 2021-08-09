import { FiUser, FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import Sidebar from '../Sidebar'
import Header from '../Header'
import styles from './styles.css'

const EmptyList = ({ description, headerName }) => {
    return (
        <div >
        <Sidebar />
        <div className="content">
            <Header name={headerName}>
                <FiUser size={25} />
            </Header>
        </div>

        <div className="content">
            <div className="bodyContent" style={{
            margin: '22%',
            width: 'auto',
            height: 'auto',
            border: '5px',
            padding: '20px',
            }}>
            <img src="https://friconix.com/png/fi-ctluxx-exclamation-mark-rounded.png" alt="" height="40" width="40" style={{margin: 'auto'}}/>
            <h1 id="Title" style={{margin: 'auto'}}>{description}</h1>
            </div>
        </div>
    </div>
    )
}

export default EmptyList