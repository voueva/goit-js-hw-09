const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: ''
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email.trim() || '';
    form.message.value = formData.message.trim() || '';
}

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.email.value.trim() || !form.message.value.trim()) {
        alert('Fill please all fields');
        return;
    }

    console.log('Form Data:', formData);

    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
});