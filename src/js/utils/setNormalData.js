import { months } from '../constants/constants';
import { findMounth } from './findMounth';
function setNormalData (data){
  const date = new Date(data);
  const mounthNumber = date.getMonth();
  return `${date.getDate()} ${findMounth(months,mounthNumber)}, ${date.getFullYear()}`;
}


export { setNormalData };
