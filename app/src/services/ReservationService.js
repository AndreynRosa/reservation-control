import Service from './Service';

const service = new Service();

const URL = 'http://localhost:9080/v1/reservations';

export async function saveReservation(request) {
  return await service.post(URL, request);
}

export async function findAllReservation() {
  return await service.get(URL);
}

export async function delteReservation(requestParam) {
  return await service.delete(`${URL}?id=${requestParam}`);
}
