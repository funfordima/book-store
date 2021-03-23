import { connect } from 'react-redux';
import AppRouter from './AppRouter';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  isAuth: state.isAuth,
});

export default connect(mapStateToProps)(AppRouter);
