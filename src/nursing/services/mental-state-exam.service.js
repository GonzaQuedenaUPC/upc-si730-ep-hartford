import http from './../../shared/services/http-common.js';

class MentalStateExamService {

    _resourceEndpoint = '/mental-state-exams';

    getAll() {
        return http.get(this._resourceEndpoint);
    }
}

export default MentalStateExamService;