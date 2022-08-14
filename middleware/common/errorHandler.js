const createError = require('http-errors')

// 404 not found handler
exports.notFoundHandler = (req, res, next) => {
    next(createError(404, 'Your requested content not found'))
}

// common error handler
exports.errorHandler = (err, req, res, next) => {
    res.locals.error = 
        process.env.NODE_ENV === 'development' ? err : {message: err.message}
    
    res.status(err.status || 500)

    if(res.locals.html) {
        // html response
        return res.render('pages/error/error', {
            title: 'Error Page'
        })
    } else {
        // json response
        res.json(res.locals.error)
    }
    
}

