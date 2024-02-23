let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show()
        } else{
            $(".post-box")
                .not("." + value)
                .hide();
            $(".post-box")
            .filter("." + value)
            .show()
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/blogs')
        .then(response => response.json())
        .then(blogs => displayBlogs(blogs))
        .catch(error => console.error('Error fetching blogs:', error));
});

function displayBlogs(blogs) {
    const postContainer = document.querySelector('.post');

    blogs.forEach(blog => {
        const postBox = document.createElement('div');
        postBox.classList.add('post-box', blog.category.toLowerCase());

        // Image
        const postImage = document.createElement('img');
        postImage.src = blog.image;
        postImage.alt = '';
        postImage.classList.add('post-img');

        // Category
        const category = document.createElement('h2');
        category.classList.add('category');
        category.textContent = blog.category;

        // Title
        const title = document.createElement('a');
        title.href = '#'; // You can set the actual link here
        title.classList.add('post-title');
        title.textContent = blog.title;

        // Date
        const date = document.createElement('span');
        date.classList.add('post-date');
        date.textContent = blog.date;

        // Description
        const description = document.createElement('p');
        description.classList.add('post-description');
        description.textContent = blog.description;

        // Profile
        const profile = document.createElement('div');
        profile.classList.add('profile');

        // Profile Name
        const profileName = document.createElement('span');
        profileName.classList.add('profile-name');
        profileName.textContent = blog.author;

        // Appending child elements
        profile.appendChild(profileName);

        postBox.appendChild(postImage);
        postBox.appendChild(category);
        postBox.appendChild(title);
        postBox.appendChild(date);
        postBox.appendChild(description);
        postBox.appendChild(profile);

        postContainer.appendChild(postBox);
    });
}

