import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/login';
import Contato from './modules/contato';

//instanciar a classe
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Contato('.contato-form');

login.init();
cadastro.init();
contato.init();

//import './assets/css/style.css';

