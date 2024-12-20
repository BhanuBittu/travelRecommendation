function submitform(){
    alert("Thanks for the response");
}
const data = {
  "countries": [
    {
      "id": 1,
      "name": "Australia",
      "cities": [
        {
          "name": "Sydney, Australia",
          "imageUrl": "https://cdn.britannica.com/71/188471-050-CF188A6B/Sydney-Opera-House-Port-Jackson.jpg",
          "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
        },
        {
          "name": "Melbourne, Australia",
          "imageUrl": "https://content.r9cdn.net/rimg/dimg/e7/e2/a092e93b-city-13998-1641eaba8a3.jpg?width=1366&height=768&xhint=1016&yhint=1024&crop=true",
          "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
        }
      ]
    },
    {
      "id": 2,
      "name": "Japan",
      "cities": [
        {
          "name": "Tokyo, Japan",
          "imageUrl": "https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg",
          "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
        },
        {
          "name": "Kyoto, Japan",
          "imageUrl": "https://content.r9cdn.net/rimg/dimg/10/dd/c1632a46-city-20339-15873436110.jpg?width=1366&height=768&xhint=792&yhint=1072&crop=true",
          "description": "Known for its historic temples, gardens, and traditional tea houses."
        }
      ]
    },
    {
      "id": 3,
      "name": "Brazil",
      "cities": [
        {
          "name": "Rio de Janeiro, Brazil",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg",
          "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
        },
        {
          "name": "São Paulo, Brazil",
          "imageUrl": "https://cdn.britannica.com/54/101754-050-3FA9B4A0/Downtown-Sao-Paulo.jpg",
          "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
        }
      ]
    }
  ],
  "temples": [
    {
      "id": 1,
      "name": "Angkor Wat Temple, Cambodia",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPy1oSckWNKt9CkhEE4TUoRKN7r9WCnqocg&s",
      "description": "A UNESCO World Heritage site and the largest religious monument in the world."
    },
    {
      "id": 2,
      "name": "Taj Mahal, India",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMq0Utl9O-TUtLMs4xn6n1q0jyqAYN0YB3w&s",
      "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
    }
  ],
  "beaches": [
    {
      "id": 1,
      "name": "Bora Bora beach, French Polynesia",
      "imageUrl": "https://cache.marriott.com/content/dam/marriott-renditions/BOBXR/bobxr-exterior-aerialview-1580-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2880px:*",
      "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
    },
    {
      "id": 2,
      "name": "Copacabana Beach, Brazil",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Praia_de_Copacabana_-_Rio_de_Janeiro%2C_Brasil.jpg/800px-Praia_de_Copacabana_-_Rio_de_Janeiro%2C_Brasil.jpg",
      "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
    }
  ]
};

// Function to display items
function displayItems(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous content

  items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
    <fieldset>
      <h3>${item.name}</h3>
      <img src="${item.imageUrl}" alt="${item.name}">
      <p>${item.description}</p>
      </fieldset>
    `;
    container.appendChild(itemDiv);
  });
}

// Search function
function search() {
  const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

  // Filter items in each category
  const filteredCountries = data.countries.flatMap(country =>
    country.cities.filter(city => city.name.toLowerCase().includes(searchTerm))
  );
  const filteredTemples = data.temples.filter(temple =>
    temple.name.toLowerCase().includes(searchTerm)
  );
  const filteredBeaches = data.beaches.filter(beach =>
    beach.name.toLowerCase().includes(searchTerm)
  );

  // Display filtered results
  displayItems("countriesContainer", filteredCountries);
  displayItems("templesContainer", filteredTemples);
  displayItems("beachesContainer", filteredBeaches);
}

function clear(){
  document.getElementById("searchInput").innerHTML=" ";

}