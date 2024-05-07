import {readFileSync} from 'fs';
let error = new Error('Failed to read file.')
function read( path: string) {
  let raw = readFileSync(`${path}`)
  if (error) {
    console.error(error);
    throw error;   
  }
  let data = JSON.stringify(raw);
  return data; 
}

export {read};