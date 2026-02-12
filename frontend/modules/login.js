import validator from 'validator';

//Validando o formulario

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        if (!this.form) return;
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.clearErrors();
            this.validate(e);
        });

        this.form.addEventListener('input', e => {
            const el = e.target;

            if(el.classList.contains('is-invalid')) {
                el.classList.remove('is-invalid');

                const feedback = el.nextElementSibling;
                if(feedback && feedback.classList.contains('invalid-feedback')){
                    feedback.innerText = '';
                }
            }
        });
    }

    validate(e) {
        const el = e.target;
        let valid = true;

        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        // let error = false;


        if(!validator.isEmail(emailInput.value)) {
            //alert('E-mail inválido');
            this.showError(emailInput, 'E-mail inválido');
            valid = false;
            //error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.showError(
                passwordInput,
                'Senha precisa ter entre 3 e 50 caracteres'
            );
            valid = false;
            //alert('Senha precisa ter entre 3 e 50 caracteres');
            //error = true;
        }
        if(valid) el.submit();
       // if(!error) el.submit();
       if (valid) {
        const submitBtn = el.querySelector('button[type="submit"]');
        submitBtn.innerText = 'Processando...';
        submitBtn.disabled = true;
        el.submit();
      }
      
    }

    showError(input, message) {
        const feedback = input.nextElementSibling;
        input.classList.add('is-invalid');
        feedback.innerText = message;
    }

    clearErrors() {
        this.form.querySelectorAll('.is-invalid').forEach(input => {
            input.classList.remove('is-invalid');
        });

        this.form.querySelectorAll('.invalid-feedback').forEach(el => {
            el.innerText = '';
        });
    }

}