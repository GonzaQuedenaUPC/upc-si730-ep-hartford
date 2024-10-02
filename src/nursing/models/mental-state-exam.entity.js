class MentalStateExam {

    constructor(id, patientId, examinerId, examDate, orientationScore, registrationScore,
                attentionScore, attentionAndCalculationsScore, recallScore, languageScore) {
        this._id = id;
        this._patientId = patientId;
        this._examinerId = examinerId;
        this._examDate = examDate;
        this._orientationScore = orientationScore;
        this._registrationScore = registrationScore;
        this._attentionScore = attentionScore;
        this._attentionAndCalculationsScore = attentionAndCalculationsScore;
        this._recallScore = recallScore;
        this._languageScore = languageScore;
    }

    get id() {
        return this._id;
    }

    get patientId() {
        return this._patientId;
    }

    get examinerId() {
        return this._examinerId;
    }

    get examDate() {
        return this._examDate;
    }

    get orientationScore() {
        return this._orientationScore;
    }

    get registrationScore() {
        return this._registrationScore;
    }

    get attentionScore() {
        return this._attentionScore;
    }

    get attentionAndCalculationsScore() {
        return this._attentionAndCalculationsScore;
    }

    get recallScore() {
        return this._recallScore;
    }

    get languageScore() {
        return this._languageScore;
    }
}

export default MentalStateExam;