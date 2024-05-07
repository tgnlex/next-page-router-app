import {Post} from '@/types/blog'
function filterByID(list:Post[] , id: number) {
  
  const filtered = list.filter((item) => item.id === id)
  if (filtered.length > 0) {
    let data = JSON.stringify(filtered);
    return data;
  }
}

export {filterByID};