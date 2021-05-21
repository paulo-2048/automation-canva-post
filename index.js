const scrawper = require('./scrawper.js')
const sheets = require('./sheets.js')

async function master(){
    const brut_data = await scrawper.web_scrawper()
    console.log('Get Data from Web Scrwper: OK')
    var name = brut_data[0]
    var description = brut_data[1]
    var categorie = brut_data[2]
    
    for (let index = 0; index < name.length; index++) {
        await sheets.acessSheet(name[index], description[index], categorie)
        console.log('Updating Sheet Data')
        console.log('Inserting New Row Informations, Nº', index+1)
        
    }
    
}


master()