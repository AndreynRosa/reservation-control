import Service from './Service';

const service = new Service();

const URL = 'http://localhost:9080/v1/reservations';

export async function saveReservation(request, spaceId) {
  return await service.post(`${URL}?spaceId=${spaceId}`, request);
}

export async function findAllReservation() {
  return await service.get(URL);
}

export async function delteReservation(requestParam) {
  return await service.delete(`${URL}?id=${requestParam}`);
}
export async function updateStatus(id, status) {
  return await service.post(`${URL}/status?id=${id}&status=${status}`);

}
