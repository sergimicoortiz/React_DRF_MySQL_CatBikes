import Api from './Api';

const RentService = {

    GetRentDashboard() {
        return Api().get('rentDashboard');
    },

    DeleteRentDashboard(id) {
        return Api().delete('rentDashboard/' + id);
    }

}

export default RentService;