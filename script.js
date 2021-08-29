class Calculator{
    constructor() {
        this.viewer = document.querySelector("#viewer");
        this.currentCalculation = '';
        this.viewer.innerHTML = '';
    }

    addToViewer(value) {
        const currentCalculationLength = this.currentCalculation.length;
        const valueToAdd = currentCalculationLength === 0 || value === '.' || this.currentCalculation[currentCalculationLength - 1] === '.' ? value : ' ' + value;
        this.currentCalculation += valueToAdd;
        this.viewer.innerHTML = this.currentCalculation;
    }

    calculateResult() {
        try {
            if(!this.currentCalculation) return;
            const result = eval(this.currentCalculation);
            this.currentCalculation = '';
            this.viewer.innerHTML = result;
        } catch(e) {
            alert("Please check your syntax and clear issues.")
        }
    }

    clear() {
        this.currentCalculation = '';
        this.viewer.innerHTML = '';
    }
}

const Calc = new Calculator();
