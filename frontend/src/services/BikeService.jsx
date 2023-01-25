import Api from "./Api";

const getAll = () => {
  return Api().get("/bikes");
};

const getOne = (slug) => {
  return Api().get("/bikes/" + slug);
};

const createBike = (data) => {
  return Api().post("/bikes", data);
};

const updateBike = (data) => {
  return Api().put("/bikes/" + data.bike.slug, data);
};

const deleteBike = (data) => {
  return Api().delete("/bikes/" + data.slug);
};

const BikeService = {
  getAll,
  getOne,
  createBike,
  deleteBike,
  updateBike
};

export default BikeService;