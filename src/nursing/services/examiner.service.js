import http from '../../shared/services/http-common.js'

class ExaminerService {

    _resourceEndpoint = '/examiners';

    getAll() {
        return http.get(this._resourceEndpoint);
    }
}

export default ExaminerService;