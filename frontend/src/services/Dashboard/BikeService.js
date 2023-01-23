import Api from "../Api";

const getAll = () => {
  return Api().get("/bikes");
};

const getOne = (slug) => {
  return Api().get("/bikes", slug);
};

const createBike = (data) => {
  console.log(data)
  return Api().post("/bikes", data);
};

const deleteBike = (data) => {
  return Api().delete("/bikes/" + data.slug);
};

const BikeService = {
  getAll,
  getOne,
  createBike,
  deleteBike
};

export default BikeService;