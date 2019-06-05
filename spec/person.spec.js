require('../spec.helper')

describe("Person", () => {

    let person = new Person({
        weight: 62,
        height: 173
    })

    it("it should have weight of 62 kg", () => {
        expect(person.weight).to.equal(62);
    }) 

    it("it should have height of 173 cm", () => {
        expect(person.height).to.equal(173);
    })

    it("should calculate BMI value", () => {
        person.calculate_bmi();
        expect(person.bmiValue).to.equal(20.72);
    })

    it("should have a BMI Message", () => {
        person.calculate_bmi();
        expect(person.bmiMessage).to.equal('Healthy');
    })
})

