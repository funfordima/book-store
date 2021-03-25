import { connect } from 'react-redux';
import Price from './Price';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  books: state.books,
});

export default connect(mapStateToProps)(Price);
