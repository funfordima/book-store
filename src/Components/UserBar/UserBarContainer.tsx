import { connect } from 'react-redux';
import UserBar from './UserBar';
import { State } from '../../Redux/interfaces';
import { updateCurrentUser } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  currentUser: state.user,
});

const mapDispatchStateToProps = {
  updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchStateToProps)(UserBar);
