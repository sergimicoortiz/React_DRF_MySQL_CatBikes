import Api from "../Api";

const getAll = () => {
  return Api().get("/slot");
};

const getOne = (id) => {
  return Api().get("/slot/" + id);
};

const SlotService = {
  getAll,
  getOne,
};

export default SlotService;