import { connect } from 'react-redux';
import CartPage from './CartPage';
import { State } from '../../Redux/interfaces';
import { fetchPurchase, setPurchaseSuccess, setPurchaseError, setBooksInCart } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  booksInCart: state.booksInCart,
  purchaseSuccess: state.purchaseSuccess,
  purchaseError: state.purchaseError,
})

const mapDispatchToProps = {
  fetchPurchase,
  setPurchaseSuccess,
  setPurchaseError,
  setBooksInCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
