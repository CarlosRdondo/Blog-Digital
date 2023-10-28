
document.getElementById("save-button").addEventListener("click", function(event) {
    event.preventDefault();

   
    const title = document.getElementById('bookTitle').value;
    const authors = document.getElementById('bookAuthors').value;
    const review = document.getElementById('bookReview').value;
    const imageUrl = document.getElementById('bookImage').value;

    const article = {
        title: title,
        authors: authors,
        review: review,
        imageUrl: imageUrl
    };

    
    let articles = JSON.parse(localStorage.getItem('articles')) || [];

    
    articles.push(article);

    localStorage.setItem('articles', JSON.stringify(articles));

    window.location.href = "consulta.html";

    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthors').value = '';
    document.getElementById('bookReview').value = '';
    document.getElementById('bookImage').value = '';
});
