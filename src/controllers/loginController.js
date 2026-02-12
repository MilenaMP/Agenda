const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    //console.log(req.session.user); Verificar o login 
    if(req.session.user) return res.render('login-logado');
    res.render('login');
}

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);  
        await login.register();

        //exibe msg de erro no formulario
        if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(function(){
            return res.redirect('/login/index');//retornar depois de salvo na pagina anterior
        });
        return;
    }
   
        req.flash('success', 'Seu usuário foi criado com sucesso');
        req.session.save(function(){
            return res.redirect('/login/index');//retornar depois de salvo na pagina anterior
        });    
        } catch(e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);  
        await login.login();

        //exibe msg de erro no formulario
        if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(function(){
            return res.redirect('/login/index');//retornar depois de salvo na pagina anterior
        });
        return;
    }
   
        req.flash('success', 'Você entrou no sistema.');
        req.session.user = login.user;//Identifica o meu navegador no servidor
        req.session.save(function(){
            return res.redirect('/login/index');//retornar depois de salvo na pagina anterior
        });    
        } catch(e) {
        console.log(e);
        return res.render('404');
    }
};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};