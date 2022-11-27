const initialState = {
  루피: {
    count: 0,
    need: [],
  },
  조로: {
    count: 0,
    need: [],
  },
  나미: {
    count: 0,
    need: [],
  },
  우솝: {
    count: 0,
    need: [],
  },
  상디: {
    count: 0,
    need: [],
  },
  쵸파: {
    count: 0,
    need: [],
  },
  버기: {
    count: 0,
    need: [],
  },
  총병: {
    count: 0,
    need: [],
  },
  검병: {
    count: 0,
    need: [],
  },
  로빈: {
    count: 0,
    need: [{ 나미: 1 }, { 상디: 1 }],
  },
  베포: {
    count: 0,
    need: [{ 쵸파: 1 }, { 루피: 1 }],
  },
  브룩: {
    count: 0,
    need: [{ 조로: 1 }, { 쵸파: 1 }],
  },
  블루노: {
    count: 0,
    need: [{ 총병: 2 }],
  },
  에이스: {
    count: 0,
    need: [{ 루피: 1 }, { 총병: 1 }],
  },
  이나즈마: {
    count: 0,
    need: [{ 상디: 1 }, { 조로: 1 }],
  },
  저격왕: {
    count: 0,
    need: [{ 우솝: 2 }],
  },
  쵸파럼블볼강화: {
    count: 0,
    need: [{ 쵸파: 2 }],
  },
  타시기: {
    count: 0,
    need: [{ 칼병: 1 }, { 총병: 1 }],
  },
  페로나: {
    count: 0,
    need: [{ 버기: 1 }, { 나미: 1 }],
  },
  프랑키: {
    count: 0,
    need: [{ 우솝: 1 }, { 루피: 1 }],
  },
  하찌: {
    count: 0,
    need: [{ 총병: 1 }, { 나미: 1 }],
  },
  후쿠로: {
    count: 0,
    need: [{ 칼병: 2 }],
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
