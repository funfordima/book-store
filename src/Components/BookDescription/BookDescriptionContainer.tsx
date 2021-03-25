import { connect } from 'react-redux';
import BookDescription from './BookDescription';
import { State } from '../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookDescription);
