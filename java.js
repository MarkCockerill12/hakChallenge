//THIS IS FOR THE BUDGET AND JSON READING

// Initialize budget
let budget = 0; // Initial budget set to 0
let ogBudget = 0;

// Function to update budget display
function updateBudgetDisplay() {
    const budgetDisplay = document.getElementById('budgetDisplay');
    budgetDisplay.textContent = `Budget: $${budget.toFixed(2)}`; // Rounded to two decimal places

   const ogBudgetDisplay = document.getElementById('ogBudgetDisplay');
 ogBudgetDisplay.textContent = `Orignal Budget: $${ogBudget.toFixed(2)}`;
}


// Function to set the budget
function setBudget() {
  const budgetInput = document.getElementById('budgetInput');
  const newBudget = parseFloat(budgetInput.value); // Parse input value as float
  if (!isNaN(newBudget)) { // Check if input is a valid number
      budget = newBudget;
      ogBudget= budget;
      
      updateBudgetDisplay();
      

  } else {
      alert('Please enter a valid number for the budget.');
  }
  
}


function addItemToBasket(itemName, itemPrice) {
  if (budget - itemPrice >= 0) {
      const shoppingCart = document.getElementById('shoppingCart');
      const newItem = document.createElement('div');
      newItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`; // Rounded to two decimal places
      shoppingCart.appendChild(newItem);
      // Deduct price from budget
      deductPriceFromBudget(itemPrice);
  } else {
      alert('Insufficient funds! Cannot add item to the basket.');
  }
}



// Function to deduct price from budget and update display
function deductPriceFromBudget(price) {
    if (budget - price >= 0) {
        budget -= price;
        updateBudgetDisplay();
    } else {
        alert('Insufficient funds! Cannot deduct price from budget.');
    }
}

// Function to remove item from basket and restore budget
function removeItemFromBasket(itemName, itemPrice) {
    const shoppingCart = document.getElementById('shoppingCart');
    const items = shoppingCart.getElementsByClassName('basket-item');
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(itemName)) {
          shoppingCart.removeChild(items[i]);
            break;
        }
    }
    // Add back deducted price to budget
    budget += itemPrice;
    updateBudgetDisplay();
}

// Function to handle search
function search() {
    // Clear previous search results
    const buyingSection = document.getElementById('buying');
    buyingSection.innerHTML = '';

    // Retrieve the search query
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Filter the data based on the search query
    const filteredData = jsonData.filter(item =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.price.toString().includes(searchQuery)
    );

    // Display the filtered data
    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = item.title;

        const pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${item.category}`;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${item.description}`;

        const pPrice = document.createElement('p');
        pPrice.textContent = `Price: $${item.price}`;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Basket';
        addButton.addEventListener('click', function() {
            addItemToBasket(item.title, item.price);
        });

        card.appendChild(h1);
        card.appendChild(pCategory);
        card.appendChild(pDescription);
        card.appendChild(pPrice);
        card.appendChild(addButton);

        buyingSection.appendChild(card);
    });
}

// Event listener for search button click
document.getElementById('searchButton').addEventListener('click', search);

// Update budget display initially
updateBudgetDisplay();

// Function to remove item from basket
function removeItemFromBasket(itemName, itemPrice) {
    const shoppingCart = document.getElementById('shoppingCart');
    const items = shoppingCart.getElementsByClassName('basket-item');
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(itemName)) {
          shoppingCart.removeChild(items[i]);
            break;
        }
    }
    // Add back deducted price to budget
    budget += itemPrice;
    updateBudgetDisplay();
}

// Modify addItemToBasket function to include remove button
function addItemToBasket(itemName, itemPrice) {
    if (budget - itemPrice >= 0) {
        const shoppingCart = document.getElementById('shoppingCart');
        const newItem = document.createElement('div');
        newItem.textContent = `${itemName} - $${itemPrice}`;
        newItem.classList.add('basket-item'); // Add a class for easier removal
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            removeItemFromBasket(itemName, itemPrice);
        });
        newItem.appendChild(removeButton);
        shoppingCart.appendChild(newItem);
        // Deduct price from budget
        deductPriceFromBudget(itemPrice);
    } else {
        alert('Insufficient funds! Cannot add item to the basket.');
    }
}









//THIS IS THE JSON STUFF SINCE IT WONT READ FROM ANOTHER FILE THANKS GITHUB

const jsonData = [
    {
      "title": "Smartphone",
      "category": "Electronics",
      "description": "The latest smartphone with advanced features and high-resolution display.",
      "price": 799.99
    },
    {
      "title": "T-shirt",
      "category": "Clothing",
      "description": "Comfortable cotton t-shirt available in various colors and sizes.",
      "price": 19.99
    },
    {
      "title": "Coffee Maker",
      "category": "Home & Kitchen",
      "description": "A programmable coffee maker with a built-in grinder for fresh coffee every morning.",
      "price": 129.99
    },
    {
      "title": "Fiction Novel",
      "category": "Books",
      "description": "Best-selling fiction novel filled with suspense and intrigue.",
      "price": 14.99
    },
    {
      "title": "Board Game",
      "category": "Toys & Games",
      "description": "Classic board game for family fun nights and gatherings.",
      "price": 39.99
    },
    {
      "title": "Hiking Backpack",
      "category": "Sports & Outdoors",
      "description": "Durable hiking backpack with multiple compartments and adjustable straps.",
      "price": 79.99
    },
    {
      "title": "Facial Cleanser",
      "category": "Beauty & Personal Care",
      "description": "Gentle facial cleanser enriched with natural ingredients for soft, radiant skin.",
      "price": 24.99
    },
    {
      "title": "Power Drill Set",
      "category": "Tools & Home Improvement",
      "description": "Complete power drill set with various drill bits and accessories for home projects.",
      "price": 149.99
    },
    {
      "title": "Vitamins & Supplements",
      "category": "Health & Household",
      "description": "Essential vitamins and supplements to support overall health and wellness.",
      "price": 29.99
    },
    {
      "title": "Car Stereo System",
      "category": "Automotive",
      "description": "High-quality car stereo system with Bluetooth connectivity and touchscreen display.",
      "price": 299.99
    },
    {
      "title": "Laptop",
      "category": "Electronics",
      "description": "Powerful laptop with fast processor and high-resolution display for work and entertainment.",
      "price": 1299.99
    },
    {
      "title": "Denim Jeans",
      "category": "Clothing",
      "description": "Classic denim jeans with a comfortable fit and stylish design.",
      "price": 39.99
    },
    {
      "title": "Microwave Oven",
      "category": "Home & Kitchen",
      "description": "Compact microwave oven with multiple cooking presets for quick and easy meals.",
      "price": 79.99
    },
    {
      "title": "Cookbook",
      "category": "Books",
      "description": "Collection of delicious recipes from around the world, perfect for aspiring chefs.",
      "price": 24.99
    },
    {
      "title": "Puzzle Set",
      "category": "Toys & Games",
      "description": "Set of challenging puzzles for hours of entertainment and brain-teasing fun.",
      "price": 29.99
    },
    {
      "title": "Camping Tent",
      "category": "Sports & Outdoors",
      "description": "Spacious camping tent with waterproof design and easy setup for outdoor adventures.",
      "price": 149.99
    },
    {
      "title": "Moisturizing Cream",
      "category": "Beauty & Personal Care",
      "description": "Hydrating moisturizing cream enriched with vitamins and antioxidants for soft, smooth skin.",
      "price": 19.99
    },
    {
      "title": "Tool Set",
      "category": "Tools & Home Improvement",
      "description": "Comprehensive tool set with wrenches, screwdrivers, and pliers for DIY projects.",
      "price": 89.99
    },
    {
      "title": "First Aid Kit",
      "category": "Health & Household",
      "description": "Compact first aid kit with essential supplies for treating minor injuries and emergencies.",
      "price": 14.99
    },
    {
      "title": "Car Seat Covers",
      "category": "Automotive",
      "description": "Durable car seat covers with stylish design and easy installation for added comfort and protection.",
      "price": 59.99
    },
      {
        "title": "Wireless Headphones",
        "category": "Electronics",
        "description": "Premium wireless headphones with active noise cancellation for immersive audio experience.",
        "price": 249.99
      },
      {
        "title": "Vintage Dress",
        "category": "Clothing",
        "description": "Elegant vintage dress featuring floral patterns and a flattering silhouette, perfect for special occasions.",
        "price": 149.99
      },
      {
        "title": "Air Purifier",
        "category": "Home & Kitchen",
        "description": "High-efficiency air purifier with HEPA filter to remove dust, allergens, and odors from the air.",
        "price": 199.99
      },
      {
        "title": "Cookbook",
        "category": "Books",
        "description": "Comprehensive cookbook with a wide range of recipes from around the world, suitable for all skill levels.",
        "price": 29.99
      },
      {
        "title": "Remote Control Car",
        "category": "Toys & Games",
        "description": "Fast and durable remote control car with precise controls, suitable for indoor and outdoor racing.",
        "price": 79.99
      },
      {
        "title": "Camping Tent",
        "category": "Sports & Outdoors",
        "description": "Spacious camping tent with waterproof construction and easy setup, ideal for outdoor adventures.",
        "price": 149.99
      },
      {
        "title": "Skincare Set",
        "category": "Beauty & Personal Care",
        "description": "Luxurious skincare set featuring premium skincare products for radiant and healthy-looking skin.",
        "price": 99.99
      },
      {
        "title": "Power Washer",
        "category": "Tools & Home Improvement",
        "description": "Heavy-duty power washer with adjustable pressure settings for cleaning driveways, decks, and patios.",
        "price": 299.99
      },
      {
        "title": "First Aid Kit",
        "category": "Health & Household",
        "description": "Comprehensive first aid kit containing essential supplies for emergencies and minor injuries.",
        "price": 39.99
      },
      {
        "title": "Car Seat Covers",
        "category": "Automotive",
        "description": "Premium car seat covers with breathable materials and stylish design to protect and enhance your car interior.",
        "price": 59.99
      },
      {
        "title": "Vintage Sunglasses",
        "category": "Clothing",
        "description": "Retro-inspired vintage sunglasses with UV protection lenses and stylish frames for a classic look.",
        "price": 39.99
      },
      {
        "title": "Electric Kettle",
        "category": "Home & Kitchen",
        "description": "Fast-boiling electric kettle with temperature control and automatic shutoff for brewing tea or coffee.",
        "price": 49.99
      },
      {
        "title": "Art History Book",
        "category": "Books",
        "description": "Comprehensive art history book covering major art movements, artists, and masterpieces from ancient to modern times.",
        "price": 34.99
      },
      {
        "title": "LEGO Set",
        "category": "Toys & Games",
        "description": "Exciting LEGO set featuring intricate building designs and mini-figures for imaginative play and construction fun.",
        "price": 69.99
      },
      {
        "title": "Hiking Backpack",
        "category": "Sports & Outdoors",
        "description": "Durable hiking backpack with multiple compartments, hydration system compatibility, and adjustable straps for comfortable carrying.",
        "price": 89.99
      },
      {
        "title": "Anti-Aging Serum",
        "category": "Beauty & Personal Care",
        "description": "Revitalizing anti-aging serum enriched with vitamins and antioxidants to reduce fine lines and rejuvenate skin elasticity.",
        "price": 49.99
      },
      {
        "title": "Toolbox Set",
        "category": "Tools & Home Improvement",
        "description": "Versatile toolbox set containing essential hand tools, screws, and nails for DIY projects and repairs around the house.",
        "price": 79.99
      },
      {
        "title": "Weighted Blanket",
        "category": "Health & Household",
        "description": "Calming weighted blanket designed to provide therapeutic pressure and promote relaxation and restful sleep.",
        "price": 119.99
      },
      {
        "title": "Car Wash Kit",
        "category": "Automotive",
        "description": "Complete car wash kit with premium cleaning products, microfiber towels, and accessories for a showroom-quality shine.",
        "price": 29.99
      },
      {
        "title": "Bluetooth Speaker",
        "category": "Electronics",
        "description": "Compact and portable Bluetooth speaker with waterproof design and deep bass for outdoor adventures and pool parties.",
        "price": 59.99
      },
      {
        "title": "Leather Boots",
        "category": "Clothing",
        "description": "Handcrafted leather boots with rugged construction and comfortable fit, perfect for hiking and outdoor activities.",
        "price": 179.99
      },
      {
        "title": "Air Fryer",
        "category": "Home & Kitchen",
        "description": "Innovative air fryer with rapid air circulation technology for crispy and healthy fried foods with less oil.",
        "price": 149.99
      },
      {
        "title": "Cookbook",
        "category": "Books",
        "description": "Inspiring cookbook featuring a collection of delicious recipes from around the world, accompanied by stunning photography.",
        "price": 24.99
      },
      {
        "title": "Remote Control Car",
        "category": "Toys & Games",
        "description": "High-speed remote control car with durable construction and responsive controls for thrilling racing adventures.",
        "price": 49.99
      },
      {
        "title": "Camping Tent",
        "category": "Sports & Outdoors",
        "description": "Spacious camping tent with weatherproof design, easy setup, and ample ventilation for comfortable outdoor living.",
        "price": 199.99
      },
      {
        "title": "Skin Moisturizer",
        "category": "Beauty & Personal Care",
        "description": "Hydrating skin moisturizer enriched with natural extracts and vitamins for soft, smooth, and radiant skin.",
        "price": 19.99
      },
      {
        "title": "Power Tool Set",
        "category": "Tools & Home Improvement",
        "description": "Comprehensive power tool set featuring a drill, saw, sander, and accessories for professional-grade home renovations.",
        "price": 299.99
      },
      {
        "title": "Yoga Mat",
        "category": "Health & Household",
        "description": "Premium yoga mat with non-slip surface, eco-friendly materials, and lightweight design for yoga and fitness workouts.",
        "price": 29.99
      },
      {
        "title": "Car Air Freshener",
        "category": "Automotive",
        "description": "Long-lasting car air freshener with refreshing scents and easy-to-use clip-on design for a pleasant driving experience.",
        "price": 9.99
      }
    ]
  

















// // THIS CODE IS FOR THE ETSY API
// function search(){

//     const app = document.getElementById('root');
  
//   const container = document.createElement('div');
//   container.setAttribute('class', 'container');
  
//   app.appendChild(container);
  
//   var gameID= "";
    
//     //THIS IS THE CODE FOR VIDEO GAME API
//     searchString = document.getElementById("GAMENAME").value;
//       url = "https://api.rawg.io/api/games?key=223cbd9b75454545a8743e05c64645ff&search="+searchString+ "&page_size=9";
//       fetch(url)
//       .then((resp) => resp.json())
//       .then(function(element) {
//         console.log(element);
  
//         for (i in element.results){
//           console.log(element.results[i].name);
  
//           const card = document.createElement('div');
//           card.setAttribute('class', 'card');
   
//           const h1 = document.createElement('h1');
//           h1.textContent = element.results[i].name;
  
//          const img = document.createElement('img');
//          img.src = element.results[i].background_image;
//           img.style.height = '250px'
//           img.style.width = '350px'
  
  
//           container.appendChild(card);
//           card.appendChild(h1);
//           card.appendChild(img);
//           } 
  
//           gameID= element.results[0].id;
//           console.log(gameID)
//           displayInfo(searchString, gameID)
//      } 
//     )
//   }
  
  
  
  
//    function displayInfo(searchString, gameID){
  
  
//       const app = document.getElementById('info');
  
//       const container = document.createElement('div');
//       container.setAttribute('class', 'container');
      
//       app.appendChild(container);
  
//      urlMoreInfo= "https://api.rawg.io/api/games/"+gameID+"?key=223cbd9b75454545a8743e05c64645ff&page_size=1";
  
//     fetch(urlMoreInfo)
//       .then((resp) => resp.json())
//       .then(function(element) {
//         console.log(element);
//           console.log(element.name);
  
//           const card = document.createElement('card');
//            card.setAttribute('class', 'card1');
   
//           const h3 = document.createElement('h3');
//           h3.textContent = element.name;
  
//           const p = document.createElement('p');
//           p.textContent = element.description_raw;
  
//           container.appendChild(card);
//           card.appendChild(h3);
//           card.appendChild(p);
  
//         })
  
  
  
//   //THIS IS THE CODE FOR deviant API
  
   
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': 'ff335927f9msh39686095c4a23c5p1d8c91jsn4609590eb49a',
//           'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
//         }
//       };
      
//       fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q='+searchString+'%20fan%20art&pageNumber=1&pageSize=18&autoCorrect=true', options)
//       .then((resp) => resp.json())
//       .then(function(art) {
//         console.log(art);
//         for (i in art.value){
  
//           const card = document.createElement('div');
//           card.setAttribute('class', 'card2');
      
//           const img = document.createElement('img');
//           img.src = `${art.value[i].url}`;
      
//           container.appendChild(card);
//           card.appendChild(img);
      
//            }   
//            })
    
//     }
  