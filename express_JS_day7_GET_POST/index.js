const express = require('express')
const app = express()

const HOST = '127.0.0.1'
const PORT = '3000'

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render('home')
})


app.post('/products', (req, res) => {
    const products = []
    const n0 = (req.body.name0 || '').trim(); const p0 = req.body.price0 ? parseFloat(req.body.price0) : 0; products.push({ name: n0, price: p0 })
    const n1 = (req.body.name1 || '').trim(); const p1 = req.body.price1 ? parseFloat(req.body.price1) : 0; products.push({ name: n1, price: p1 })
    const n2 = (req.body.name2 || '').trim(); const p2 = req.body.price2 ? parseFloat(req.body.price2) : 0; products.push({ name: n2, price: p2 })
    const n3 = (req.body.name3 || '').trim(); const p3 = req.body.price3 ? parseFloat(req.body.price3) : 0; products.push({ name: n3, price: p3 })
    const n4 = (req.body.name4 || '').trim(); const p4 = req.body.price4 ? parseFloat(req.body.price4) : 0; products.push({ name: n4, price: p4 })
    const n5 = (req.body.name5 || '').trim(); const p5 = req.body.price5 ? parseFloat(req.body.price5) : 0; products.push({ name: n5, price: p5 })
    const n6 = (req.body.name6 || '').trim(); const p6 = req.body.price6 ? parseFloat(req.body.price6) : 0; products.push({ name: n6, price: p6 })
    const n7 = (req.body.name7 || '').trim(); const p7 = req.body.price7 ? parseFloat(req.body.price7) : 0; products.push({ name: n7, price: p7 })
    const n8 = (req.body.name8 || '').trim(); const p8 = req.body.price8 ? parseFloat(req.body.price8) : 0; products.push({ name: n8, price: p8 })
    const n9 = (req.body.name9 || '').trim(); const p9 = req.body.price9 ? parseFloat(req.body.price9) : 0; products.push({ name: n9, price: p9 })
    const n10 = (req.body.name10 || '').trim(); const p10 = req.body.price10 ? parseFloat(req.body.price10) : 0; products.push({ name: n10, price: p10 })
    const n11 = (req.body.name11 || '').trim(); const p11 = req.body.price11 ? parseFloat(req.body.price11) : 0; products.push({ name: n11, price: p11 })
    const n12 = (req.body.name12 || '').trim(); const p12 = req.body.price12 ? parseFloat(req.body.price12) : 0; products.push({ name: n12, price: p12 })
    const n13 = (req.body.name13 || '').trim(); const p13 = req.body.price13 ? parseFloat(req.body.price13) : 0; products.push({ name: n13, price: p13 })
    const n14 = (req.body.name14 || '').trim(); const p14 = req.body.price14 ? parseFloat(req.body.price14) : 0; products.push({ name: n14, price: p14 })
    res.render('products', { products })
})

app.get('/products', (req, res) => res.redirect('/'))

app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`)
})