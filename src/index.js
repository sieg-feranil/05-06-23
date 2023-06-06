import express from 'express'
import ngrok from 'ngrok'
import * as student from './students-routes.mjs'
const app = express()
const port = 3000
app.use(express.json())




app.get('/', student.firstPage)
app.get('/digitazon/2023/02/group/4/students', student.getGroupStudents)
app.get('/digitazon/2023/02/students', student.getCompleteRegister)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })