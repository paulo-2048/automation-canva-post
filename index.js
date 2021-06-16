const scrawper = require('./scrawper.js')
const sheets = require('./sheets.js')

async function master(){
    const brut_data = await scrawper.webScrawper()
    await console.log('Get Data from Web Scrwper: OK')
    let name = brut_data[0]
    let description = brut_data[1]
    let categorie = brut_data[2]
    
    for (let index = 0; index < name.length; index++) {
        await sheets.sendInformation(name[index], description[index], categorie)
        console.log('Updating Sheet Data')
        console.log('Inserting New Row Informations, Nº', index+1)
    }

    let sheet_data = await sheets.getInformations()
    let get_name = await sheet_data[(sheet_data.length - 1)].name
    let get_description = await sheet_data[(sheet_data.length - 1)].description
    let get_date = await sheet_data[(sheet_data.length - 1)].date

    await console.log(name, description, categorie)
    await scrawper.create_design(get_name, get_description, get_date)
    console.log('Design Ok, Process Finalized')

}


master()