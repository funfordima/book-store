import { connect } from 'react-redux';
import Header from './Header';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  booksInCart: state.booksInCart,
});

export default connect(mapStateToProps)(Header);
