const cards = document.querySelector('#cards');

//Had some AI help to help me figure out how to do this section 

function displayMembers(members) {

    let selectMembers = [];

    for (let i=0; i < members.length; i++) {
        
        if (members[i].membership === 2 || members[i].membership === 3 ) {
            selectMembers.push(members[i]);
        }
    }
    
    let randomizeMembers = [];

    while (selectMembers.length > 0) {
        let randomIndex = Math.floor(Math.random() * selectMembers.length);
        let randomMember = selectMembers.splice(randomIndex, 1)[0];
        randomizeMembers.push(randomMember);
    }

    for (let i=0; i < 3 && i < randomizeMembers.length; i++) {

        let member = randomizeMembers[i];
    
        let card = document.createElement('section');
        let company = document.createElement('h2');
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        company.textContent = `${member.name}`;
            
        if (member.image) {
            image.setAttribute('src', member.image);
            image.setAttribute('alt', `Image of ${member.name}`);
            image.setAttribute('loading', 'lazy');   
        }

        phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
        website.innerHTML = `<strong>Website:</strong> ${member.website}`;
            
        card.appendChild(company);
        card.appendChild(image);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
        }
    }

        
 
    



async function getData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

getData();