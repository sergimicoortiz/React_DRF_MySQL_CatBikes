import Api from "./Api";

const getAll = () => {
  return Api().get("/incidents");
};


const IncidentsService = {
  getAll,
};

export default IncidentsService;