import Api from "../Api";

const getAll = () => {
  return Api().get("/slot");
};

const getOne = (id) => {
  return Api().get("/slot/" + id);
};

const returnBike = (slug) => {
  return Api().get("/bikes/" + slug);
};


const SlotService = {
  getAll,
  getOne,
  returnBike
};

export default SlotService;