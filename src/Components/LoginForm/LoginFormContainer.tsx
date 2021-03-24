import { connect } from 'react-redux';
import { setUser, setUserFailure } from '../../Redux/actions';
import LoginForm from './LoginForm';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = {
  setUser,
  setUserFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
