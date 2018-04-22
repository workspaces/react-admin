import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import * as actions from './actions';
import * as reducers from './reducers';
import * as sagas from './sagas';
import AppPage from '../../common/AppPage';

class ShowComponent extends React.Component {
  render() {
    // console.log(this.props);
    const { show, onShow } = this.props;
    return (
      <div className="hello">
        <div className="greeting">
          Hello {show}
        </div>
        <div>
          <Button type="primary" onClick={onShow}>show</Button>
        </div>
      </div>
    );
  }
}

class ShowPage extends AppPage {
  mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onShow: () => dispatch(actions.show()),
    };
  }
}

let showPage = new ShowPage('show');
// 注册reducer
showPage.registerReducer('show', reducers.show);
// 注册saga
showPage.registerSaga(sagas.watchShow());
export default showPage.getContainer(ShowComponent);