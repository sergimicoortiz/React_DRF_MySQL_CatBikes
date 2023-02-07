import Api from "./Api";

const rentBike = (data) => {
    return Api().post("rent", { "rentBike": { "start_slot": data.id } });
};

const RentService = {
    rentBike,
};

export default RentService;