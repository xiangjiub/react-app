// 改文件是用于创建一个count的组件服务的reducer，reducer本质就是一个函数
// reducer函数会接受两个参数：之前的状态(preState),动作状态(action)
const initState = 0;
export default function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "increment": //加
    //   console.log("@");
      return preState + data;
    case "decrement": //减
      return preState - data;
    default:
      return 99;
  }
}
