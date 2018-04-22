import { HomeComponent } from './components';
import * as actions from './actions';
import * as reducers from './reducers';
import * as sagas from './sagas';
import AppPage from '../../common/AppPage';

class HomePage extends AppPage {
  /**
   * 填充默认数据
   */
  mapStateToProps = (state, ownProps) => {
    ownProps = { ...ownProps, data: 'initData'};
    return {...ownProps, ...state[this.pageName]};
  }

  mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onIncrement: () => dispatch(actions.increment()),
      onDecrement: () => dispatch(actions.decrement()),
      onIncrementAsync: () => dispatch(actions.incrementAsync()),
      onDecrementAsync: () => dispatch(actions.decrementAsync()),
    };
  }
}

let homePage = new HomePage('enthusiasm');

// 注册reducer
homePage.registerReducer('enthusiasm', reducers.enthusiasm);

// 注册saga
homePage.registerSaga(sagas.watchIncrementAsync());
homePage.registerSaga(sagas.watchDecrementAsync());

export default homePage.getContainer(HomeComponent);