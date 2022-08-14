// get users page
exports.usersGetController = (req, res, next) => {
    res.render('pages/users', {
        title: 'Users - Chat Application'
    })
}