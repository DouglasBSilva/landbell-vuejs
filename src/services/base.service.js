export class BaseService{
    baseUrl = 'http://localhost:8000/api/v1';
    baseEndpoint = null;
    constructor(baseEndpoint){
        this.baseEndpoint = baseEndpoint;
    }

    /**
     * Get the URL for the request
     */
    get url(){
        return `${this.baseUrl}${this.baseEndpoint}`;
    }     
}
