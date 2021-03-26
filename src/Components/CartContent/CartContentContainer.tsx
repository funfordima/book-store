import { connect } from 'react-redux';
import CartContent from '../../Components/CartContent/CartContent';
import { State } from '../../Redux/interfaces';
import { setBooksInCart } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  books: state.books,
  booksInCart: state.booksInCart,
})

const mapDispatchStateToProps = {
  setBooksInCart,
};

export default connect(mapStateToProps, mapDispatchStateToProps)(CartContent);
