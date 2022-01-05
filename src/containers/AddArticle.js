import addArticleForm from '../components/Form';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(
        addArticle({
          id: new Date().getTime(),
          title: text,
        })
      );
    },
  };
};
let AddArticle = connect(null, mapDispatchToProps)(addArticleForm);

export default AddArticle;
