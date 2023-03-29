function checkBody(req, res, next){
    const body = req.body

    if(body?.todo){
        next()
    }else{
        const result = {
            success: false,
            error: "Invalid body"
        }
        res.status(400).json(result)
    }
}

function checkParams(req, res, next){
    const id = req.params.id;

    if(id){
        //req.params.id = parseInt(req.params.id)
        next()
    }else{
        const result = {
            success: false,
            error: "No ID in the URL"
        }
        res.status(400).json(result)
    }
}

module.exports = { checkBody }