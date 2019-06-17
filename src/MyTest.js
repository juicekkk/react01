import React, { Component } from 'react';

// class MyTest extends Component {
//   render() {
//     return (
//       <div>
//         안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.<br></br>
//         Goodbye! <b>{this.props.saybye}</b>
//       </div>
//     );
//   }
// }

// MyTest.defaultProps = {
//   saybye : 'ㅂㅂ',
// }

const MyTest = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyTest;