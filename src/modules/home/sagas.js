import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 执行的事件
function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: actions.INCREMENT });
}

// 执行的事件
function* decrementAsync() {
  yield call(delay, 1000);
  yield put({ type: actions.DECREMENT });
}

// 监听action.type=INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(actions.INCREMENT_ASYNC, incrementAsync);
}

// 监听action.type=DECREMENT_ASYNC
export function* watchDecrementAsync() {
  yield takeEvery(actions.DECREMENT_ASYNC, decrementAsync);
}

export async function callApi() {
  const response = await fetch('/api/hello');
  // console.log(response);
  const body = await response.json();
  // console.log(body);
  if (response.status !== 200) throw Error(body.message)
  return body;
};