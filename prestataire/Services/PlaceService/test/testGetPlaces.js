const expect = require('expect.js');
const low = require('lowdb');
const fileSync = require('lowdb/adapters/FileSync');
const adapter = new fileSync('data/db.json');
const db = low(adapter);
const placeController = require('../controllers/places.js');

describe("Get available seats", () => {
    const id1 = {id: "NP1"};
    const id2 = {id: "NP2"};
    const id3 = {id: "NB1"};
    const id4 = {id: "NB2"};
    const id5 = {id: "NB3"};

    const idResponse =
    {
        id1: {
            "id": "NP1",
            "firstClass": {
                "noOption": 14,
                "bicycle": 0,
                "plug": 0
            },
            "secondClass": {
                "noOption": 25,
                "bicycle": 0,
                "plug": 0
        }},
        id2: {
            "id": "NP2",
            "firstClass": {
                "noOption": 14,
                "bicycle": 5,
                "plug": 10,
            },
            "secondClass": {
                "noOption": 19,
                "bicycle": 20,
                "plug": 21,
        }},
        id3: {
            "id": "NB1",
            "firstClass": {
                "noOption": 11,
                "bicycle": 5,
                "plug": 8
            },
            "secondClass": {
                "noOption": 25,
                "bicycle": 19,
                "plug": 9
        }},
        id4: {
            "id": "NB2",
            "firstClass": {
                "noOption": 19,
                "bicycle": 10,
                "plug": 0
            },
            "secondClass": {
                "noOption": 29,
                "bicycle": 20,
                "plug": 0
        }},
        id5: {
            "id": "NB3",
            "firstClass": {
                "noOption": 15,
                "bicycle": 0,
                "plug": 11
            },
            "secondClass": {
                "noOption": 32,
                "bicycle": 0,
                "plug": 21
            }
        }};

    beforeEach(() => placeController.resetDatabase());

    it("should return the available seats with train ID NP1", () => {
        return placeController.getAvailablePlaces(id1)
            .then(() => {
                db.read();
                const response = db.get('places')
                    .find({id: id1.id})
                    .value();
                expect(response).to.eql(idResponse.id1);
            })
        }
    );
    it("should return the available seats with train ID NP2", () => {
            return placeController.getAvailablePlaces(id2)
                .then(() => {
                    db.read();
                    const response = db.get('places')
                        .find({id: id2.id})
                        .value();
                    expect(response).to.eql(idResponse.id2);
                })
        }
    );
    it("should return the available seats with train ID NB1", () => {
            return placeController.getAvailablePlaces(id3)
                .then(() => {
                    db.read();
                    const response = db.get('places')
                        .find({id: id3.id})
                        .value();
                    expect(response).to.eql(idResponse.id3);
                })
        }
    );
    it("should return the available seats with train ID NB2", () => {
            return placeController.getAvailablePlaces(id4)
                .then(() => {
                    db.read();
                    const response = db.get('places')
                        .find({id: id4.id})
                        .value();
                    expect(response).to.eql(idResponse.id4);
                })
        }
    );
    it("should return the available seats with train ID NB3", () => {
            return placeController.getAvailablePlaces(id5)
                .then(() => {
                    db.read();
                    const response = db.get('places')
                        .find({id: id5.id})
                        .value();
                    expect(response).to.eql(idResponse.id5);
                })
        }
    );
});


