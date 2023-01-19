import Api from "../Api";

const getAll = () => {
  return Api().get("/bikes");
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
  createBike,
  deleteBike
};

export default BikeService;