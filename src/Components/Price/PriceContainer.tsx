import { connect } from 'react-redux';
import Price from './Price';
import { State } from '../../Redux/interfaces';
import { setBooksInCart } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  booksInCart: state.booksInCart,
});

const mapDispatchToProps = {
  setBooksInCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Price);
