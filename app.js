
module.exports = app => {

    const metrologueroutes = require('./app/routes/metrologue.routes')
    app.use('/api/metrologue', metrologueroutes);

    const tutorialroutes = require('./app/routes/turorial.routes')
    app.use('/api/tutorials', tutorialroutes);

    const salleroutes = require('./app/routes/salle.routes')
    app.use('/api/salle', salleroutes);
    
    const batimentroutes = require('./app/routes/batiment.routes')
    app.use('/api/batiment', batimentroutes);

    const materialroutes = require('./app/routes/materiel.routes')
    app.use('/api/materiel', materialroutes);
}