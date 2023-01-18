import Api from "../Api";

const getAll = () => {
  return Api().get("/bikes");
};

const BikeService = {
  getAll,
};

export default BikeService;