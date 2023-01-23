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


const SlotService = {
  getAll,
  getOne,
  returnBikeBackend
};

export default SlotService;