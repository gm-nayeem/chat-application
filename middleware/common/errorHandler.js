const createError = require('http-errors')

// 404 not found handler
exports.notFoundHandler = (req, res, next) => {
    next(createError(404, 'Your requested content not found'))
}

// common error handler
exports.errorHandler = (error, req, res, next) => {
    return res.render('pages/error/error')
}

