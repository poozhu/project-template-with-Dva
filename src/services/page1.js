import request from '../utils/request';

export async function get() {
  return request('https://api.genderize.io/?name=peter', {
    method: 'GET',
  });
}
