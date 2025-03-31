
document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate required fields
        const requiredFields = ['name', 'phone', 'emergencyContact', 'emergencyPhone', 'budget', 'accommodation'];
        let isValid = true;
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = '#ddd';
            }
        });
        
        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Collect form data
        const formData = {
            participantInfo: {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                wechat: document.getElementById('wechat').value,
                emergencyContact: document.getElementById('emergencyContact').value,
                emergencyPhone: document.getElementById('emergencyPhone').value,
                dietary: document.getElementById('dietary').value,
                specialNeeds: document.getElementById('specialNeeds').value
            },
            tripPreferences: {
                dates: Array.from(document.querySelectorAll('input[name="dates"]:checked')).map(el => el.value),
                activities: Array.from(document.querySelectorAll('input[name="activities"]:checked')).map(el => el.value),
                transport: document.querySelector('input[name="transport"]:checked').value,
                budget: document.getElementById('budget').value
            },
            logistics: {
                accommodation: document.getElementById('accommodation').value,
                carpool: document.querySelector('input[name="carpool"]:checked').value,
                shirtSize: document.getElementById('shirtSize').value
            }
        };
        
        // In a real app, you would send this data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for submitting the survey! Your information has been received.');
        surveyForm.reset();
    });
    
    // Reset field validation on input
    const inputs = surveyForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
        });
    });
});
