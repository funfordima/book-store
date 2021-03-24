import { connect } from 'react-redux';
import CatalogPage from './CatalogPage';
import { State } from '../../Redux/interfaces';
import { updateCurrentUser } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  isAuth: state.isAuth,
});

const mapDispatchToProps = {
  updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
