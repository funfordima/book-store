import { connect } from 'react-redux';
import Menu from './Menu';
import { State } from '../../Redux/interfaces';
import { setBooksFiltered } from '../../Redux/actions';

const mapStateToProps = (state: State) => ({
  books: state.books,
});

const mapDispatchToProps = {
  setBooksFiltered,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
