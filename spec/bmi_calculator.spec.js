require('../spec.helper')

describe('BMICalculator', () => {
    let bmi_calculator
    let person

    beforeEach(() => {
        person = new Person({weight: 62, height: 173});
        bmi_calculator = new BMICalculator();
    });

    it('calculates BMI for a person using metric method', () => {
        bmi_calculator.metric_bmi(person)
        expect(person.bmiValue).to.eq(20.72)
    })

    it("sets BMI message for a person using metric method", () => {
        bmi_calculator.metric_bmi(person);
        expect(person.bmiMessage).to.equal('Healthy');
    });
    
}); 