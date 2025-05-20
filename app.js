let products = [
    {name: 'Salgadinho', price: 15, category: 'comida', availability: true},
    {name: 'Sabonete', price: 14, category: 'higiene', availability: true},
    {name: 'Xampu', price: 13, category: 'higiene', availability: false},
    {name: 'Frango', price: 15, category: 'comida', availability: false}
]

const form = document.getElementById('form')
const listButton = document.getElementById('listButton')
const filterButton = document.getElementById('filterButton')

const productSection = document.getElementById('products')

listButton.addEventListener('click', ()=>{
    productSection.innerHTML = ''
    productSection.style.display = 'flex'
    
    products.map((item)=>{
        createCard(item)
    })
})

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const chosenCategory = document.getElementById('category').value
    const availability = document.getElementById('availability').checked


   filterProducts(chosenCategory, availability)
})

function filterProducts(category, availability){

    let filterProducts = products.filter((item)=> item.category == category)

    if(availability){
        filterProducts = filterProducts.filter((item)=> item.availability == availability)
    }

    productSection.innerHTML = ""

    filterProducts.map((item)=>{
        createCard(item)
    })
}

function createCard(item){
    
    let card = document.createElement('div')
    card.className = 'product'

    if(!item.availability){
        card.classList.add('unavailable')
    }

    card.innerHTML = `
        <p class="title">${item.name}</p>
        <p class="price">R$${item.price}</p>
        <p class="category">${item.category}</p>
    `

    productSection.appendChild(card)
}



   


