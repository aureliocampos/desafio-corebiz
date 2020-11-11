const productsContainer = document.querySelector('.products-items')
const form = document.querySelector('#form-newsletter')

const getProducts = async () => {

  const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products')
  return await response.json()
}

const generateFormattedCurrency = number => {
  if(number !== null) {
    const currency = (number / 100)

    return currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return false
}
const generateInstallmentInformation = arrays => {

  arrays.map( item => 
    `ou em ${item.quantity}x de ${generateFormattedCurrency(item.value)}`
  )
}
const generateProductsTemplate = products => products.map(({ imageUrl, productName, listPrice, price, stars, installments }) => `
  <article class="products-item">
    <figure class="products-figure">
      <img src="${imageUrl}" alt="${productName}" class="image-responsive">
    </figure>
    <div class="products-info">
      <h2 class="products-name">${productName}</h2>
      <div class="stars-items">
        <svg width="12" height="11" fill="none" class="star-item">
          <path class="star-fill" d="M5.7 8.7L9.2 10.6 8.3 6.9 11.4 4.5 7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7Z" fill="#F8475F"/>
          <path class="star" d="M11.4 4.5L7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7 9.2 10.6 8.3 6.9 11.4 4.5ZM5.7 7.7L3.6 8.9 4.1 6.6 2.2 5.1 4.7 4.9 5.7 2.8 6.7 4.9 9.2 5.1 7.3 6.6 7.8 8.9 5.7 7.7Z" fill="#F8475F"/>
        </svg>
        <svg width="12" height="11" fill="none" class="star-item">
          <path class="star-fill" d="M5.7 8.7L9.2 10.6 8.3 6.9 11.4 4.5 7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7Z" fill="#F8475F"/>
          <path class="star" d="M11.4 4.5L7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7 9.2 10.6 8.3 6.9 11.4 4.5ZM5.7 7.7L3.6 8.9 4.1 6.6 2.2 5.1 4.7 4.9 5.7 2.8 6.7 4.9 9.2 5.1 7.3 6.6 7.8 8.9 5.7 7.7Z" fill="#F8475F"/>
        </svg>
        <svg width="12" height="11" fill="none" class="star-item">
          <path class="star-fill" d="M5.7 8.7L9.2 10.6 8.3 6.9 11.4 4.5 7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7Z" fill="#F8475F"/>
          <path class="star" d="M11.4 4.5L7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7 9.2 10.6 8.3 6.9 11.4 4.5ZM5.7 7.7L3.6 8.9 4.1 6.6 2.2 5.1 4.7 4.9 5.7 2.8 6.7 4.9 9.2 5.1 7.3 6.6 7.8 8.9 5.7 7.7Z" fill="#F8475F"/>
        </svg>
        <svg width="12" height="11" fill="none" class="star-item">
          <path class="star-fill" d="M5.7 8.7L9.2 10.6 8.3 6.9 11.4 4.5 7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7Z" fill="#F8475F"/>
          <path class="star" d="M11.4 4.5L7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7 9.2 10.6 8.3 6.9 11.4 4.5ZM5.7 7.7L3.6 8.9 4.1 6.6 2.2 5.1 4.7 4.9 5.7 2.8 6.7 4.9 9.2 5.1 7.3 6.6 7.8 8.9 5.7 7.7Z" fill="#F8475F"/>
        </svg>
        <svg width="12" height="11" fill="none" class="star-item">
          <path class="star-fill" d="M5.7 8.7L9.2 10.6 8.3 6.9 11.4 4.5 7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7Z" fill="#F8475F"/>
          <path class="star" d="M11.4 4.5L7.3 4.1 5.7 0.6 4.1 4.1 0 4.5 3.1 6.9 2.2 10.6 5.7 8.7 9.2 10.6 8.3 6.9 11.4 4.5ZM5.7 7.7L3.6 8.9 4.1 6.6 2.2 5.1 4.7 4.9 5.7 2.8 6.7 4.9 9.2 5.1 7.3 6.6 7.8 8.9 5.7 7.7Z" fill="#F8475F"/>
        </svg>
      </div>
      <p class="products-listprice">de ${generateFormattedCurrency(listPrice)}</p>
      <p class="products-price">por ${generateFormattedCurrency(price)}</p>
      <p class="products-installment">${generateInstallmentInformation(installments)}</p>
    </div>
    <button class="products-buy">Comprar</button>
  </article>`).join('')


const cleanInstallmentContainer = container => {
  document.querySelectorAll(container).forEach( item => {
    item.remove()
  })
}
const cleanListPriceContainer = container => {
  document.querySelectorAll(container).forEach( item => {
    if(item.textContent === 'de false') {
      item.remove()
    }
  })
}
const cleanContainers = (primaryContainer, secondContainer) => {
  cleanInstallmentContainer(primaryContainer)
  cleanListPriceContainer(secondContainer)
}

const addProductsIntoDOM = async () => {
  const products = await getProducts()
  const productsTemplate = generateProductsTemplate(products)

  productsContainer.innerHTML += productsTemplate
  
  cleanContainers('.products-installment', '.products-listprice')
}

const paragraphFeedbackMessageEmail = document.createElement('p')
const paragraphFeedbackMessageName = document.createElement('p')

const insertFeedbackMessage = (input, text, target) => {  
  target.setAttribute('class', 'error')
  target.textContent = text

  input.style.outline = '#D7182A auto 1px'
  input.insertAdjacentElement('afterend', target)
}
const removeFeedbackMessage = input => {
  const error = document.querySelector('.error')
  
  input.style.outline = 'none'
  error.remove()
}
const testName = name => /^[a-z-A-Z\D]+$/g.test(name);
const testEmail = email => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);

const formReset = () => {
  form.reset()
  form.name.focus()
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const name = event.target.name
  const email = event.target.email
  
})

form.name.addEventListener('input', () => {
  const isValidName = testName(name.value)

  if (isValidName) {
    removeFeedbackMessage(name)
    return
  }
  insertFeedbackMessage(name, 'Preencha com seu nome completo' ,paragraphFeedbackMessageName)
})

form.email.addEventListener('input', () => {
  const isValidEmail = testEmail(email.value)
  if(isValidEmail) {
    removeFeedbackMessage(email)
    return
  }
  insertFeedbackMessage(email, 'Preencha com um e-mail válido', paragraphFeedbackMessageEmail)
})

addProductsIntoDOM()