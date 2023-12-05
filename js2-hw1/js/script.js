const countries = [
    {
      Country: 'KG',
      Code: '+996',
    },
    {
      Country: 'UZ',
      Code: '+998',
    },
    {
      Country: 'RU',
      Code: '+7',
    },
    {
      Country: 'UA',
      Code: '+380',
    }
  ];
  
  
  function findCountryByCode(input) {
    const parts = input.split(' ');
  
    if (parts.length > 1) {
      const code = parts[0];
      const countryObj = countries.find(country => country.Code === code);
  
      if (countryObj) {
        return countryObj.Country;
      }
    }
  
    return '';
  }
  
  function findCountry() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const resultElement = document.getElementById('result');
  
    const country = findCountryByCode(phoneNumber);
  
    if (country) {
      resultElement.textContent = 'Country: ' + country;
    } else {
      resultElement.textContent = 'not region';
    }
  }
  