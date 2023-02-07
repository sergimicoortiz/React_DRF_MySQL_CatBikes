import Api from './Api';

const RentService = {

    GetRentDashboard() {
        return Api().get('rentDashboard');
    }

}

export default RentService;