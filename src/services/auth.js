import axios from "axios";
const auth =  {
    url: 'http://localhost:9090',
    
    register(val){
        return axios({
            method: 'post',
            url: this.url + '/register',
            data: val
          })
    },

    login() {

    }
}


export default auth;