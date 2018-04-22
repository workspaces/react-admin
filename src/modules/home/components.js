import React from 'react';
import { Button } from 'antd';

export class HomeComponent extends React.Component {

  render() {
    // console.log(this.state);
    // console.log(this.props);
    const { languageName, enthusiasmLevel, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync } = this.props;
    return (
      <div className="hello">
        <div className="greeting">
          Hello {languageName} {enthusiasmLevel}
        </div>
        <div>
          <Button type="primary" onClick={onDecrement}>-</Button>
          <Button onClick={onIncrement}>+</Button>
          <Button onClick={onDecrementAsync}>--</Button>
          <Button onClick={onIncrementAsync}>++</Button>
        </div>
      </div>
    );
  }
}
