import { connect } from 'react-redux';
import BookDescription from './BookDescription';
import { State } from '../../Redux/interfaces';
import { fetchBookBuId } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  book: state.book,
  LoadBook: state.LoadBook,
  error: state.fetchBookErr,
});

const mapDispatchToProps = {
  fetchBookBuId,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDescription);
