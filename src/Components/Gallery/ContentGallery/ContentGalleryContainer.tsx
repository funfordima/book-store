import { connect } from 'react-redux';
import ContentGallery from './ContentGallery';
import { State } from '../../../Redux/interfaces';

const mapStateToProps = (state: State) => ({
  books: state.books,
});

export default connect(mapStateToProps)(ContentGallery);
