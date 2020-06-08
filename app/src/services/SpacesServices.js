import Service from './Service';
import { id } from 'date-fns/locale';

const service = new Service();

const URL = 'http://localhost:9080/v1/spaces';

export async function saveSpace(request) {
  return await service.post(URL, request);
}

export async function findAllSpaces() {
  return await service.get(URL);
}

export async function delteSpace(requestParam) {
  return await service.delete(`${URL}?id=${requestParam}`);
}
