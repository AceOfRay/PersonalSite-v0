var myList = [
    {
        title: "First time using TypeScript!",
        date: "October 18th, 2023",
        description: "After a challenging process of setting up Node and TypeScript, we're up and running.",
        slug: "blog.html"
    },
    {
        title: "Sitting in my bed coding!",
        date: "October 18th, 2023",
        description: "At least my lovely GF is here with me.",
        slug: "blog.html"
    },
    {
        title: "The Weather",
        date: "October 18th, 2023",
        description: "I want to do cute fall things with my girlfriend, but the weather has not been allowing."
        + " It's supposed to be fall! #sadGirlAutumn #AllToBaddd",
        slug: "blog.html"
    },
    {
        title: "The last silly thing I have posted",
        date: "October 18th, 2023",
        description: "My girlfriend is a swiftie, she made me say what I said before",
        slug: "blog.html"
    },
];
function addBlogToDOM(blogList) {
    var container = document.getElementById('postContainer');
    if (container) {
        blogList.forEach(function (blog) {
            var finalDiv = document.createElement('div');
            var titleDiv = document.createElement('div');
            var secondDiv = document.createElement('div');
            var title = document.createElement('h1');
            var date = document.createElement('h4');
            var text = document.createElement('p');
            var link = document.createElement('a');
            title.textContent = blog.title;
            date.textContent = blog.date;
            text.textContent = blog.description;
            link.href = blog.slug;
            link.textContent = 'To Top';
            finalDiv.style.display = 'flex';
            finalDiv.style.flexDirection = 'column';
            titleDiv.style.display = 'flex';
            titleDiv.style.justifyContent = 'space-between';
            secondDiv.style.display = 'flex';
            secondDiv.style.flexDirection = 'column';
            titleDiv.appendChild(title);
            titleDiv.appendChild(date);
            secondDiv.appendChild(text);
            secondDiv.appendChild(link);
            finalDiv.appendChild(titleDiv);
            finalDiv.appendChild(secondDiv);
            container.appendChild(finalDiv);
        });
    }
}
addBlogToDOM(myList);
