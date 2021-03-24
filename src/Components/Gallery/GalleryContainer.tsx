import { connect } from 'react-redux';
import { fetchBooks, getBookFailure } from '../../Redux/actions';
import Gallery from './Gallery';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchBooks,
  getBookFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
