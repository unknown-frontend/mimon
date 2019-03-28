import * as Types from '../constatns/app';
import { setQuery } from '../helpers';

export function getDustApi(body = {}) {
  const url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst'; // 시군구별
  const params = setQuery(body);
  return dispatch => fetch(
    `${url}${params}`
  )
    .then(res => res.json())
    .then((json) => {
      if (json.responseCode !== 200) {
        return dispatch({
          type: Types.GET_DUST_API_SUCCESS,
          payload: json
        });
      }
      return dispatch({
        type: Types.GET_DUST_API_FAILURE,
        payload: json
      });
    })
    .catch(error => console.error(error));
}