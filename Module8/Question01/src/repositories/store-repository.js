const fs = require('fs')
  
class Repository {
    constructor(filename) {
  
        if (!filename) {
            throw new Error('Filename is '
                + 'required to create a datastore!')
        }
        this.filename = filename
        try {
            fs.accessSync(this.filename)
        } catch (err) {
            fs.writeFileSync(this.filename, '{"table": []}')
        }    
    }

    async writeToRepository(obj) {

        let filename = this.filename
        fs.readFile(filename, function readFileCallback(err, data) {

            if (err) {
                console.log(err)
            } else {
                let records = JSON.parse(data)
                let content = JSON.stringify(obj)
                records.table.push(content)
                let newTable = JSON.stringify({
                    "table": records.table
                })

                fs.writeFile(filename, newTable, 'utf8', (err) => {
                    if (err) throw err
                })
            } 
        })
    }
  
    async findOneBy(attrs) {
        const jsonRecords = await 
            fs.promises.readFile(this.filename, {
            encoding: 'utf8'
        })
        const records = JSON.parse(jsonRecords)


        let response = []
        for (let record of records.table) {
            if (attrs == JSON.parse(record).id) {
                response.push(JSON.parse(record))
            }

        }
        return response
    }

    async deleteFromRepositoryBy(attrs) {
        const jsonRecords = await 
            fs.promises.readFile(this.filename, {
                encoding: 'utf8'
            })
        const records = JSON.parse(jsonRecords)

        let response = []
        for (let record of records.table) {
            if (attrs != JSON.parse(record).id) {
                response.push(JSON.parse(record))
            }
        }

        fs.writeFile(this.filename, '{"table": []}', 'utf8', (err) => {
            if (err) throw err
        })
        for (let item of response) {
            this.writeToRepository(item)
        }
    }
} 
module.exports = new Repository('datastore.json')
