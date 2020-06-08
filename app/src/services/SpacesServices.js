import Service from './Service';

const service = new Service();

const URL = 'http://localhost:9080/v1/spaces';

export  async function save(request) {
  return await service.post(URL, request);
}

export  async function findAllSpaces() {
  return await service.get(URL);
}
