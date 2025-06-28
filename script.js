function showEventDetails() {
    const eventSelect = document.getElementById('eventSelect').value;
    const eventDetails = document.getElementById('eventDetails');

   
    eventDetails.innerHTML = '';

    if (eventSelect) {
        let title = '';
        let imageSrc = '';
        let textFile = '';

        switch (eventSelect) {
            case 'civilWar':
                title = 'Civil War (1861-1865)';
                imageSrc = 'images/civil_war.jpeg';
                textFile = 'civil_war.txt';
                break;
            case 'declarationIndependence':
                title = 'Declaration of Independence';
                imageSrc = 'images/declaration_independence.jpeg';
                textFile = 'declaration_independence.txt';
                break;
            case 'stockMarketCrash':
                title = 'Stock Market Crash';
                imageSrc = 'images/stock_market_crash.jpg';
                textFile = 'stock_market_crash.txt';
                break;
            case 'bostonTeaParty':
                title = 'Boston Tea Party';
                imageSrc = 'images/boston_tea_party.jpeg';
                textFile = 'boston_tea_party.txt';
                break;
            default:
                eventDetails.innerHTML = '<p>Event not found.</p>';
                return;
        }


        fetch(textFile)
            .then(response => response.text())
            .then(description => {

                const updatedDescription  = description.replace(/<h2>/g, '<h2 class="subheading">');

                eventDetails.innerHTML = `
                    <h2 class="main-heading">${title}</h2>
                    <img src="${imageSrc}" alt="${title}">
                    <p>${updatedDescription }</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching the text file:', error);
                eventDetails.innerHTML = '<p>Error loading event details. <br> Please try again later.</p>';
            });
    }
}
