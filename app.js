
module.exports = app => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
      });

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

    const lecteurroutes = require('./app/routes/lecteur.routes')
    app.use('/api/lecteur', lecteurroutes);

    const localisationroutes = require('./app/routes/localisation.routes')
    app.use('/api/localisation', localisationroutes);

    const typeroutes = require('./app/routes/type.routes');
    app.use('/api/type', typeroutes);
}