import { connect } from 'react-redux';
import { fetchBooks } from '../../Redux/actions';
import Gallery from './Gallery';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  isLoad: state.isLoad,
  error: state.fetchBookErr,
  books: state.books,
  filteredBooks: state.filteredBooks,
});

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
