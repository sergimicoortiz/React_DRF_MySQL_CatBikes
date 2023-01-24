import Api from "../Api";

const getAll = () => {
  return Api().get("/slot");
};

const getOne = (id) => {
  return Api().get("/slot/" + id);
};

const returnBikeBackend = (slug, id) => {
  return Api().put("/bikes/" + slug, { 'bike': {}, 'slot': { 'id': id } });
};

const rentBikeBackend = (id) => {
  return Api().put("/slot/detach_bike/" + id);
};


const SlotService = {
  getAll,
  getOne,
  returnBikeBackend,
  rentBikeBackend
};

export default SlotService;