// get inbox page
exports.inboxGetController = (req, res, next) => {
    res.render('pages/inbox', {
        title: 'Inbox - Chat Application'
    })
}