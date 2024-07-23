const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few snacks lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerEl = document.getElementById("container")

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const { name, username, location, avatar, post: postImage, comment, likes } = post;

    containerEl.innerHTML += `
        <div class="post-owner">
            <div class="post-owner-img">
                <img class="post-owner-avatar" src=${avatar} alt=${name} />
            </div>
            <div class="post-owner-id-location">
                <div class="post-owner-name">${name}</div>
                <div class="post-owner-location">${location}</div>
            </div>
        </div>
        <div class="post-img">
            <img id="img-${username}" class="post" src=${postImage} alt=${name} />
            <div id="heart-${username}" class="heart-animation"></div>
        </div>
        
        <div class="post-info">
            <div class="post-icons">
                <svg id="svg-${username}" class="post-like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <!-- Heart outline with white filling -->
                    <path id="path-${username}" fill="white" stroke="black" stroke-width="2"
                     d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>

                <svg class="post-comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!-- Define your comment icon path here -->
                    <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/>
                </svg>

                <svg class="post-dm" viewBox="0 0 170 200">
                    <polygon fill="white" stroke="black" stroke-width="15"
                        points="0,30 150,30 80,170 60,85"    
                    />
                    <line stroke="black" stroke-width="15"
                        x1="60" y1="85" x2="150" y2="30" />
                </svg>
          
            </div>
            <div id="div-${username}" class="post-no-of-likes">${likes} likes</div>
            <div class="post-details">
                <div class="post-owner-id">${username}</div>
                <div class="post-description">${comment}</div>
            </div>
        </div>
    `;
}

// Add event listeners to toggle heart icon

const likeIcons = document.querySelectorAll(".post-like");
likeIcons.forEach(icon => {
    icon.addEventListener("click", function (event) {
        const id = event.target.id.split('-'); // Split the string at the hyphen
        const value = id[1];
        
        toggleLike(icon, value) // Toggle fill color and stroke color       
    });
});


const postImgEl = document.querySelectorAll(".post-img")
postImgEl.forEach(img => {
    img.addEventListener("dblclick", (event) => {
        event.preventDefault();
        const id = event.target.id.split('-'); // Split the string at the hyphen
        const value = id[1];
          
        const heartEl = document.getElementById(`heart-${value}`)
        
        const icon = document.getElementById(`svg-${value}`)
        toggleLike(icon, value, heartEl) // Toggle fill color and stroke color       

    })    
})

function toggleLike(p_icon, p_value, p_heartEL) {
    
    let numOfLikesEl = document.getElementById(`div-${p_value}`)
    let numOfLikes = parseInt(numOfLikesEl.textContent)
    
    if (p_icon.classList.contains("liked")) {
        p_icon.querySelector("path").setAttribute("fill", "white");
        p_icon.querySelector("path").setAttribute("stroke", "black");
        p_icon.classList.remove("liked");
            
        numOfLikes = parseInt(numOfLikes) - 1
        numOfLikesEl.textContent = `${numOfLikes} likes`
    } else {
        p_icon.querySelector("path").setAttribute("fill", "red");
        p_icon.querySelector("path").setAttribute("stroke", "red");
        p_icon.classList.add("liked");
            
        numOfLikes = parseInt(numOfLikes) + 1
        numOfLikesEl.textContent = `${numOfLikes} likes`
        
        if (p_heartEL) {
            p_heartEL.style.opacity = 1
            setTimeout(() => {
                p_heartEL.style.opacity = 0
            }, 500)
        }
        
    }
}



