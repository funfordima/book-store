import { connect } from 'react-redux';
import CartContent from '../../Components/CartContent/CartContent';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  books: state.books,
  booksInCart: state.booksInCart,
})

export default connect(mapStateToProps)(CartContent);
