import { connect } from 'react-redux';
import MainSearch from './MainSearch';
import { State } from '../../Redux/interfaces';
import { setSearchBook } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  searchBook: state.searchBook,
});

const mapDispatchToProps = {
  setSearchBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);