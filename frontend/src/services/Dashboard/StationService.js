import Api from '../Api';

const StationService = {

    GetStations() {
        return Api().get('station');
    },

    CreateStations(data) {
        return Api().post('station', data);
    },

    GetStation(slug) {
        return Api().get(`station/${slug}`);
    },

    DeleteStation(slug) {
        return Api().delete(`station/${slug}`);
    },

    UpdateStation(slug, data) {
        return Api().put(`station/${slug}`, data);
    },

}

export default StationService;