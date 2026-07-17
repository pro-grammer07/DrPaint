async function getProjectPosts() {
  try {
    const response = await fetch("http://localhost:8800/getPosts");
    const postres = await response.json();

    // Ensure the response data is an array
    const posts = Array.isArray(postres.data) ? postres.data : [];

    // Sort posts by createdAt in descending order
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Get the most recent 3 posts
    const recentPosts = posts.slice(0, 3);

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.innerHTML = ""; // Clear any existing content

    recentPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("col-lg-4", "col-md-6", "wow", "fadeInUp");
      postElement.dataset.wowDelay = "0.1s";

      postElement.innerHTML = `
                <a href="../Projects/projects.html">
                    <div class="feature-item bg-light rounded p-4">
                        <div class="d-flex align-items-center justify-content-center">
                            <img src="${post.image}" width="400px" height="390px" style="object-fit: cover;" alt="${post.project}">
                        </div>
                        <h5 class="mb-3 mt-3">${post.project}</h5>
                        <p class="m-0">${post.description}</p>
                    </div>
                </a>
            `;

      projectsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", getProjectPosts);
