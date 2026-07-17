async function getProjectPosts() {
  try {
    const response = await fetch("http://localhost:8800/getPosts");
    const postres = await response.json();

    const posts = postres.data;

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.innerHTML = ""; // Clear any existing content

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("col-lg-6", "col-md-12", "wow", "fadeInUp");
      postElement.dataset.wowDelay = "0.3s";

      postElement.innerHTML = `
                <div class="feature-item bg-light rounded p-4" style="height: ${post.height}px;">
                    <div class="d-inline-flex align-items-center justify-content-center">
                        <img src="${post.image}" width="100%" height="100%" style="object-fit: cover;">
                    </div>
                    <h5 class="mb-3"><br>${post.project}</h5>
                    <p class="m-0">${post.description}</p>
                </div>
            `;

      projectsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", getProjectPosts);
