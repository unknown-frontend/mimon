import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import * as AppAction from '../actions/app';

const mapStateToProps = (state) => {
  return ({
    list: state.list
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getDustApi: bindActionCreators(AppAction.getDustApi, dispatch)
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
