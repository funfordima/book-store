import { connect } from 'react-redux';
import CartPage from './CartPage';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  booksInCart: state.booksInCart,
})

export default connect(mapStateToProps)(CartPage);
