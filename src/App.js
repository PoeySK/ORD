import React, { useState, useRef } from "react";

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
  const intervalId = useRef(null);
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
      id: "칼병",
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
      need: [{ 조로: 1 }, { 쵸파: 1 }],
    },
    {
      id: "블루노",
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
      id: "쵸파럼블볼강화",
      count: 0,
      need: [{ 쵸파: 2 }],
    },
    {
      id: "타시기",
      count: 0,
      need: [{ 칼병: 1 }, { 총병: 1 }],
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
      need: [{ 총병: 1 }, { 나미: 1 }],
    },
    {
      id: "후쿠로",
      count: 0,
      need: [{ 칼병: 2 }],
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
    let saveUnits = [];
    // temp unit 객체
    let insufficientUnit = "";
    let result = false;
    let newUnits = units.map((unit) => {
      if (unit.id === e.target.id) {
        console.log(unit.need);
        let needLength = 0;
        for (let i = 0; i < unit.need.length; i++) {
          const len = Object.entries(unit.need[i]).map((m) => {
            needLength += m[1];
          });
        }

        let trueCounting = 0;
        for (let i = 0; i < unit.need.length; i++) {
          const mapping = Object.entries(unit.need[i]).map((m) => {
            const find = units.map((tg) => {
              if (tg.id === m[0]) {
                if (tg.count >= m[1]) {
                  saveUnits.push([tg.id, m[1]]);
                  return (trueCounting += m[1]);
                } else {
                  insufficientUnit += tg.id + (m[1] - tg.count) + "개 ";

                  return trueCounting;
                }
              } else {
                return trueCounting;
              }
            });
            return trueCounting;
          });
          if (parseInt(mapping) === needLength) {
            result = true;
            break;
          }
        }

        if (result) {
          // 조합 가능
          console.log("조합 가능");
          return {
            ...unit,
            count: unit.count + 1,
          };
        } else {
          // 조합 불가능
          console.log("조합 불가능");
          alert(insufficientUnit + "이(가) 부족합니다.");
          return unit;
        }
      } else {
        return unit;
      }
    });

    // 이전 단계 유닛 제거
    if (result) {
      for (let i = 0; i < saveUnits.length; i++) {
        const reallocate = newUnits.map((unit) => {
          if (saveUnits[i][0] === unit.id) {
            return {
              ...unit,
              count: unit.count - saveUnits[i][1],
            };
          } else {
            return unit;
          }
        });
        setUnits(reallocate);
      }
    }
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
            <th>안흔함</th>
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
                    <button
                      id={name}
                      className="make"
                      onClick={onClickButtonMake}
                    >
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
