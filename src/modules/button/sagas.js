import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';


// 执行的事件
function* show() {
  // 获取全局state
  const state = yield select();
  console.log(state);
  // 触发action.type=show_data
  yield put(actions.showData('saga'));
}

// 监听action.type=INCREMENT_ASYNC
export function* watchShow() {
  yield takeEvery(actions.SHOW, show);
}
