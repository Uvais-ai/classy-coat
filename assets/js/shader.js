document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing',
            author: 'Stella',
            authorImage: 'https://via.placeholder.com/50',
            stars: '★★★★★',
            image: 'assets/images/testimon.jpg'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
            author: 'John Doe',
            authorImage: 'https://via.placeholder.com/50',
            stars: '★★★★☆',
            image: 'assets/images/testimon.jpg'
        }
        // Add more testimonials as needed
    ];

    let currentIndex = 0;

    const testimonialContent = document.querySelector('.testimonial-content p');
    const testimonialAuthor = document.querySelector('.testimonial-author p');
    const testimonialAuthorImage = document.querySelector('.testimonial-author img');
    const testimonialStars = document.querySelector('.stars');
    const testimonialImage = document.querySelector('.testimonial-image img');

    const showTestimonial = (index) => {
        testimonialContent.textContent = testimonials[index].content;
        testimonialAuthor.textContent = testimonials[index].author;
        testimonialAuthorImage.src = testimonials[index].authorImage;
        testimonialStars.textContent = testimonials[index].stars;
        testimonialImage.src = testimonials[index].image;
    };

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});
