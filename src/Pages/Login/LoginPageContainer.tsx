import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  isAuth: state.isAuth,
});

export default connect(mapStateToProps)(LoginPage);
