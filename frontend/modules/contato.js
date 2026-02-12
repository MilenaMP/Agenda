import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        if(!this.form) return;
        this.events();
    }

    events() {
        if(!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.clearErrors();
            this.validate(e);
        });

        const telefoneInput= this.form.querySelector('input[name="telefone"]');

        if (telefoneInput) {
            telefoneInput.addEventListener('input', e => {
                this.maskPhone(e);
            });
        }

        this.form.addEventListener('input', e => {
            const el = e.target;

            if(el.classList.contains('is-invalid')) {
                el.classList.remove('is-invalid');
                 
                const feedback = el.nextElementSibling;
                if(feedback && feedback.classList.contain('invalid-feedback')){
                   feedback.innerText = '';
                }
            }
        });
    }

    validate(e) {
        const el = e.target;
        let valid = true;

        const nome = el.querySelector('input[name="nome"]');
        const sobrenome = el.querySelector('input[name="sobrenome"]');
        const email = el.querySelector('input[name= "email"]');
        const telefone = el.querySelector('input[name="telefone"]');

        if(!nome.value && !sobrenome.value) {
            this.showError(nome, 'Nome ou sobrenome é obrigatório');
            this.showError(sobrenome, 'Nome ou sobrenome é obrigatório');
            valid = false;
        }

        if(email.value && !telefone.value){
            this.showError(email, 'Informe e-mail ou telefone');
            this.showError(telefone, 'Informe e-mail ou telefone');
            valid = false;
        }

        if(email.value && !validator.isEmail(email.value)) {
            this.showError(email, 'E-mail inválido');
            valid = false;
        }

        if(valid) el.submit();
    }


    showError(input, message) {
        input.classList.add('is-invalid');

        let div = input.nextElementSibling;
        if (!div || !div.classList.contains('invalid-feedback')) {
            div = document.createElement('div');
            div.classList.add('invalid-feedback');
            input.after(div);
        }

        div.innerText = message;
    }

    clearErrors() {
        this.form.querySelectorAll('.is-invalid').forEach(el => {
            el.classList.remove('is-invalid');
        });

        this.form.querySelectorAll('.invalid-feedback').forEach(el => {
            el.innerText = '';
        });
    }

    maskPhone(e) {
        let value = e.target.value.replace(/\D/g, '');

        if(value.length > 11) {
             value = value.slice(0, 11);
        }     

        if (value.length > 6) {
            e.target.value = value.replace(
              /^(\d{2})(\d{4,5})(\d{4})$/,
              '($1) $2-$3'
            );
          } else if (value.length > 2) {
            e.target.value = value.replace(
              /^(\d{2})(\d+)/,
              '($1) $2'
            );
          } else {
            e.target.value = value;
          }
    }         
}