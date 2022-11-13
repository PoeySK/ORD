import React, { useState } from "react";

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
  "블루누",
  "에이스",
  "이나즈마",
  "저격왕",
  "쵸파 럼블볼강화",
  "타시기",
  "페로나",
  "프랑키",
  "하찌",
  "후쿠로",
];

const App = () => {
  const [units, setUnits] = useState([
    {
      id: "루피",
      count: 0,
    },

    {
      id: "조로",
      count: 0,
    },

    {
      id: "나미",
      count: 0,
    },

    {
      id: "우솝",
      count: 0,
    },

    {
      id: "상디",
      count: 0,
    },

    {
      id: "쵸파",
      count: 0,
    },

    {
      id: "버기",
      count: 0,
    },

    {
      id: "총병",
      count: 0,
    },

    {
      id: "검병",
      count: 0,
    },
    {
      id: "로빈",
      count: 0,
      need: [{ 나미: 1 }, { 상디: 1 }],
    },
    {
      id: "베포",
      count: 0,
      need: [{ 쵸파: 1 }, { 루피: 1 }],
    },
    {
      id: "브룩",
      count: 0,
      need: [{ 조로: 1 }, { 상디: 1 }],
    },
    {
      id: "블루누",
      count: 0,
      need: [{ 총병: 2 }],
    },
    {
      id: "에이스",
      count: 0,
      need: [{ 루피: 1 }, { 상디: 1 }],
    },
    {
      id: "이나즈마",
      count: 0,
      need: [{ 상디: 1 }, { 조로: 1 }],
    },
    {
      id: "저격왕",
      count: 0,
      need: [{ 우솝: 2 }],
    },
    {
      id: "쵸파럼블볼강회",
      count: 0,
      need: [{ 쵸파: 2 }],
    },
    {
      id: "타시기",
      count: 0,
      need: [{ 검병: 1 }, { 총병: 1 }],
    },
    {
      id: "페로나",
      count: 0,
      need: [{ 버기: 1 }, { 나미: 1 }],
    },
    {
      id: "프랑키",
      count: 0,
      need: [{ 우솝: 1 }, { 루피: 1 }],
    },
    {
      id: "하찌",
      count: 0,
      need: [{ 총병: 1 }, { 검병: 1 }],
    },
    {
      id: "후쿠로",
      count: 0,
      need: [{ 검병: 2 }],
    },
  ]);

  const onClickButtonPlus = (e) => {
    let newUnits = units.map((unit) => {
      if (unit.id === e.target.id) {
        return {
          ...unit,
          count: unit.count + 1,
        };
      } else {
        return unit;
      }
    });
    setUnits(newUnits);
  };

  const onClickButtonMake = (e) => {
    let newUnits = units.map((unit) => {
      if (unit.id === e.target.id) {
        let needUnits = unit.need.map((u) => {
          console.log(u);
          return {
            ...u,
          };
        });
      } else {
        return unit;
      }
    });
    setUnits(newUnits);
  };

  const onClickRightButton = (e) => {
    let newUnits = units.map((unit) => {
      if (unit.id === e.target.id) {
        return {
          ...unit,
          count: unit.count - 1 < 0 ? 0 : unit.count - 1,
        };
      } else {
        return unit;
      }
    });
    console.log(newUnits);
    setUnits(newUnits);
    e.preventDefault();
  };

  const probablity = () => {};

  return (
    <>
      <div>
        <table id="common">
          <thead>
            <th>원랜디 조합법</th>
          </thead>
          <tbody>
            <th>흔함</th>
            {commonUnits.map((name, index) => {
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
                  <td>{units[index].count}</td>
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
            <th>흔함</th>
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
                    <button className="make" onClick={onClickButtonMake}>
                      M
                    </button>
                  </td>
                  <td>{units[index + commonUnits.length].count}</td>
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
