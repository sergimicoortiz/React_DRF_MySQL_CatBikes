import Api from "./Api";

const getAll = () => {
  return Api().get("/incidents");
};

const deleteIncidents = (data) => {
  return Api().delete("/incidents/" + data.slug)
}


const IncidentsService = {
  getAll,
  deleteIncidents,
};

export default IncidentsService;