import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

export default connect(null, mapStateToProps)(Navigation)