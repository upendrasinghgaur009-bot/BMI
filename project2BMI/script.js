function calculateBMI() {
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error-msg');
    const bmiValueText = document.getElementById('bmi-value');
    const bmiCategoryText = document.getElementById('bmi-category');

    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    const weight = parseFloat(weightInput);
    const heightCm = parseFloat(heightInput);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        errorDiv.classList.remove('hidden');
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category = '';
    let bgColor = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        bgColor = '#3b82f6';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal Weight';
        bgColor = '#22c55e';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        bgColor = '#f59e0b';
    } else {
        category = 'Obese';
        bgColor = '#ef4444';
    }

    bmiValueText.innerText = bmi;
    bmiCategoryText.innerText = category;
    resultDiv.style.backgroundColor = bgColor;
    
    resultDiv.classList.remove('hidden');
}