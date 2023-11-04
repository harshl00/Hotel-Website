function changePrice(hotel) {
    const deluxePrice = document.getElementById(`deluxePrice${hotel}`).value;
    const superDeluxePrice = document.getElementById(`superDeluxePrice${hotel}`).value;
    const premiumPrice = document.getElementById(`premiumPrice${hotel}`).value;

    if (deluxePrice !== '' && superDeluxePrice !== '' && premiumPrice !== '') {
        document.getElementById(`deluxePrice${hotel}`).textContent = deluxePrice;
        document.getElementById(`superDeluxePrice${hotel}`).textContent = superDeluxePrice;
        document.getElementById(`premiumPrice${hotel}`).textContent = premiumPrice;

        localStorage.setItem(`hotel${hotel}DeluxePrice`, deluxePrice);
        localStorage.setItem(`hotel${hotel}SuperDeluxePrice`, superDeluxePrice);
        localStorage.setItem(`hotel${hotel}PremiumPrice`, premiumPrice);

        document.getElementById(`deluxePrice${hotel}`).value = '';
        document.getElementById(`superDeluxePrice${hotel}`).value = '';
        document.getElementById(`premiumPrice${hotel}`).value = '';
    }
}

// Retrieve prices from localStorage on page load (Page 2)
document.addEventListener('DOMContentLoaded', function() {
    const hotels = ['A', 'B']; // Add more hotels as needed

    hotels.forEach(hotel => {
        const deluxePrice = localStorage.getItem(`hotel${hotel}DeluxePrice`);
        const superDeluxePrice = localStorage.getItem(`hotel${hotel}SuperDeluxePrice`);
        const premiumPrice = localStorage.getItem(`hotel${hotel}PremiumPrice`);

        if (deluxePrice && superDeluxePrice && premiumPrice) {
            document.getElementById(`deluxePrice${hotel}`).textContent = deluxePrice;
            document.getElementById(`superDeluxePrice${hotel}`).textContent = superDeluxePrice;
            document.getElementById(`premiumPrice${hotel}`).textContent = premiumPrice;
        }
    });
});
function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'available_hotels.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid credentials. Please try again.';
    }
}