import Api from './Api';

const UserService = {

    Login(data) {
        return Api().post('login', data);
    },

    Register(data) {
        return Api().post('register', data);
    },

    GetUser() {
        return Api().get('user');
    },

    Logout(data) {
        return Api().post('logout', { token: data });
    },

    RefreshToken(data){
        return Api().post('refreshToken');
    }
}

export default UserService;