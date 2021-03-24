import { connect } from 'react-redux';
import UserBar from './UserBar';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  currentUser: state.user,
});

export default connect(mapStateToProps)(UserBar);
