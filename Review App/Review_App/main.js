document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value.trim();
    
    if (!name || !rating || !comment) {
        alert('Please fill out all fields.');
        return;
    }
    
    const reviewList = document.getElementById('reviewList');
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `<strong>${name}</strong> (Rating: ${rating}/5)<br><p>${comment}</p>`;
    
    reviewList.appendChild(reviewItem);
    
    document.getElementById('reviewForm').reset();
});