import axios from 'axios';
import parsePdb from 'parse-pdb';

const apiRequest = () => {
  const instance = axios.create({
    baseURL: 'https://files.rcsb.org/ligands/view/',
    timeout: 30000,
  });
  instance.get('co2_ideal.pdb').then(result => {
    var data = parsePdb(result.data);
    console.log(data);
  });
  // console.log(instance);
};

export {apiRequest};
