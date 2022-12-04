import React from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { plusButton, rightButton } from "./redux/rootReducer";

const commonUnits = [
  "루피",
  "조로",
  "나미",
  "우솝",
  "상디",
  "쵸파",
  "버기",
  "총병",
  "칼병",
];
const nonCommonUnits = [
  "로빈",
  "베포",
  "브룩",
  "블루노",
  "에이스",
  "이나즈마",
  "저격왕",
  "쵸파럼블볼강화",
  "타시기",
  "페로나",
  "프랑키",
  "하찌",
  "후쿠로",
];

const App = () => {
  const getUnits = useSelector((state) => state);
  console.log(getUnits);
  const dispatch = useDispatch();

  const onClickButtonPlus = (e) => {
    e.preventDefault();
    dispatch(plusButton());
    console.log("Plus 후 : ", getUnits);
  };

  const onClickButtonMake = (e) => {
    e.preventDefault();
  };

  const onClickRightButton = (e) => {
    e.preventDefault();
    dispatch(rightButton());
    console.log("right 후 : ", getUnits);
  };

  // const probablity = () => {};

  return (
    <>
      <div>
        <table id="common">
          <thead>
            <th>원랜디 조합법</th>
          </thead>
          <tbody>
            <th>흔함</th>
            {commonUnits.map((name) => {
              return (
                <tr>
                  <td>{name}</td>
                  <td>
                    <button
                      id={name}
                      className="plus"
                      onClick={onClickButtonPlus}
                      onContextMenu={onClickRightButton}
                    >
                      +
                    </button>
                  </td>
                  <td>count 값</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table id="non-common">
          <thead>
            <th>원랜디 조합법</th>
          </thead>
          <tbody>
            <th>안흔함</th>
            {nonCommonUnits.map((name, index) => {
              return (
                <tr>
                  <td>{name}</td>
                  <td>
                    <button
                      id={name}
                      className="plus"
                      onClick={onClickButtonPlus}
                      onContextMenu={onClickRightButton}
                    >
                      +
                    </button>
                    <button
                      id={name}
                      className="make"
                      onClick={onClickButtonMake}
                    >
                      M
                    </button>
                  </td>
                  <td>count 값</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
