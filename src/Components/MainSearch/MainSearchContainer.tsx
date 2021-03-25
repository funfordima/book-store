import { connect } from 'react-redux';
import MainSearch from './MainSearch';
import { State } from '../../Redux/interfaces';
import { setSearchBook, setBooksFiltered } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  searchBook: state.searchBook,
  books: state.books,
});

const mapDispatchToProps = {
  setSearchBook,
  setBooksFiltered,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);