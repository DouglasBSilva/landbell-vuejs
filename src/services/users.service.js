import axios from 'axios';
import { BaseService } from './base.service';

export class UsersService extends BaseService{
    constructor(){
        super('/users/');
    }

    /**
     * List all the available users
     * @param {Number} page 
     * @param {Number} per_page 
     * @returns 
     */
    index(page = 1, per_page = 10){
        return axios.get(super.url, {params: {page, per_page}});
    }

    /**
     * Get the information about the chosen user 
     * @param {Number} id 
     * @returns Promise 
     */
    show(id){
        return axios.get(`${super.url}${id}`);
    }

    /**
     * Get All the friends of the chosen user
     * @param {Number} id 
     * @returns 
     */
    loadFriends(id){
        return axios.get(`${super.url}${id}/friends`);
    }

    /**
     * Get All the friends of the chosen user friends
     * 
     * @param {Number} id 
     * @returns 
     */
    loadFriendsOfFriends(id){
        return axios.get(`${super.url}${id}/friendsOfFriends`);
    }


    /**
     * Get friend suggestion based on the chosen user current friends
     * @param {Number} id 
     * @returns 
     */
    loadSuggestions(id){
        return axios.get(`${super.url}${id}/suggestions`);
    }


    /**
     * Get friend suggestion based on the chosen user current friends
     * @param {Number} id 
     * @returns 
     */
    loadCityRecommendations(id){
        return axios.get(`${super.url}${id}/cityRecommendations`);
    }

}
