import { connect } from 'react-redux';
import CatalogPage from './CatalogPage';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  isAuth: state.isAuth,
});

export default connect(mapStateToProps)(CatalogPage);
