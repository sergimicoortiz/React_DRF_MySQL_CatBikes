import Api from "../Api";

const getAll = () => {
  return Api().get("/slot");
};

const SlotService = {
  getAll,
};

export default SlotService;