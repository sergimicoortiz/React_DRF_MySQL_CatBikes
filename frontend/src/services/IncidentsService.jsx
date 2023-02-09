import Api from "./Api";

const getAll = () => {
  return Api().get("/incidents");
};

const updateIncident = (data) => {
  return Api().put("/incidents/" + data[0].slug)
}

const deleteIncidents = (data) => {
  return Api().delete("/incidents/" + data.slug)
}


const IncidentsService = {
  getAll,
  updateIncident,
  deleteIncidents,
};

export default IncidentsService;