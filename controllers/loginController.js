// get login page
exports.loginGetController = (req, res, next) => {
    res.render('pages/login', {
        title: 'Login - Chat Application'
    })
}