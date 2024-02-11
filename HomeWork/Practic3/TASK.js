let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]

    window.onload = generateUserCards();

    function generateUserCards() {
        let container = document.body;
        let title = document.createElement('h1');
        title.textContent = 'User Accounts';
        container.appendChild(title);
        users.forEach(user => {
            let card = document.createElement('div');
            card.classList.add('user-card', user.isActive ? 'active' : 'inactive');

            card.innerHTML = `
                <div class="content">
                    <h2>${user.name}</h2>
                </div>
                <div class="info">
                    <h3>${user.name}</h3>
                    <p>Gender: ${user.gender}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Address: ${user.address}</p>
                    <p>Balance: ${user.balance}</p>
                </div>
            `;


            

            container.appendChild(card);
        });

        let totalCard = document.createElement('div');
            totalCard.classList.add('total-card');
            let totalBalance = users.reduce((sum, user) => sum + parseFloat(user.balance.replace(/[^\d.-]/g, '')), 0);
            let activeBalance = users.reduce((sum, user) => user.isActive ? sum + parseFloat(user.balance.replace(/[^\d.-]/g, '')) : sum, 0);
            let inactiveBalance = users.reduce((sum, user) => !user.isActive ? sum + parseFloat(user.balance.replace(/[^\d.-]/g, '')) : sum, 0);

            totalCard.innerHTML = `
                <div class="total-info">
                    <div>
                        <h1>Total Balance: $${totalBalance.toFixed(2)}</h1>
                    </div>
                    <div>
                        <p><span style="color: green;">  Active Balance:</span> $${activeBalance.toFixed(2)}</p>
                        <p><span style="color: red;">  Inactive Balance:</span> $${inactiveBalance.toFixed(2)}</p>
                    </div>
                </div>
            `;

            container.appendChild(totalCard);
    }

    function filterUsersByBalance(users, minBalance) {
        return users.filter(user => parseFloat(user.balance.replace(/[^\d.]/g, '')) > minBalance);
    }
    
    function displayUsers(users) {
        let container = document.getElementById('user-list-container');
    
        container.innerHTML = '';
    
        users.forEach(user => {
            let userInfo = document.createElement('div');
            userInfo.classList.add('user-info');
            userInfo.innerHTML = `
                <p>Name: ${user.name}</p>
                <p>Gender: ${user.gender}</p>
                <p>Phone: ${user.phone}</p>
                <button onclick="callUser('${user.phone}')">Call</button>
            `;
            container.appendChild(userInfo);
        });
    }

    function callUser(phoneNumber) {
        alert(`Calling ${phoneNumber}`);
    }

    function filter(){
        let needBalanceStr = prompt('Задайте баланс для пошуку користувачів');
        if(needBalanceStr === null){return;}
        let needBalance = parseInt(needBalanceStr); 
        while(isNaN(needBalance)){
            needBalanceStr = prompt('Задайте баланс для пошуку користувачів')
            if(needBalanceStr === null){return;}
            needBalance = parseInt(needBalanceStr);
        }
        let filteredUsers = filterUsersByBalance(users, needBalance);
        displayUsers(filteredUsers);
    }
