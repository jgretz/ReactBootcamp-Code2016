import axios from 'axios';
import marvel from '../utils/marvel';

export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';
export const LOAD_HEROES_FAILURE = 'LOAD_HEROES_FAILURE';

// redux-promise
// export const loadHeroes = () =>
//   axios({
//     method: 'get',
//     url: 'https://gateway.marvel.com:443/v1/public/characters',
//     params: marvel(),
//   }).then((response) => {
//     if (response.data.code === 200) {
//       return {
//         type: LOAD_HEROES_SUCCESS,
//         payload: response.data.data.results,
//       };
//     }
//
//     return {
//       type: LOAD_HEROES_FAILURE,
//     };
//   });

// redux-thunk
export const loadHeroes = () =>
  (dispatch) =>
    axios({
      method: 'get',
      url: 'https://gateway.marvel.com:443/v1/public/characters',
      params: marvel(),
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch({
          type: LOAD_HEROES_SUCCESS,
          payload: response.data.data.results,
        });
      }

      dispatch({
        type: LOAD_HEROES_FAILURE,
      });
    });
