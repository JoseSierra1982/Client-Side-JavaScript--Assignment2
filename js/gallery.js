// Array of image objects for the gallery
const images = [
    { 
        thumbnail: "images/flowers-pink-small.jpg", // Thumbnail image path
        fullSize: "images/flowers-pink-large.jpg",  // Full-size image path
        caption: "Beautiful pink flowers in bloom"  // Image caption
    },
    { 
        thumbnail: "images/flowers-purple-small.jpg", 
        fullSize: "images/flowers-purple-large.jpg", 
        caption: "Purple flowers with a soft glow"
    },
    { 
        thumbnail: "images/flowers-red-small.jpg", 
        fullSize: "images/flowers-red-large.jpg", 
        caption: "Vibrant red flowers in the garden"
    },
    { 
        thumbnail: "images/flowers-white-small.jpg", 
        fullSize: "images/flowers-white-large.jpg", 
        caption: "Pure white flowers basking in sunlight"
    },
    { 
        thumbnail: "images/flowers-yellow-small.jpg", 
        fullSize: "images/flowers-yellow-large.jpg", 
        caption: "Bright yellow flowers cheering up the day"
    }
];

// Select main elements on the page
const fullSizeImage = document.getElementById("full-size-image"); // Main display image
const figCaption = document.getElementById("image-caption");      // Caption under the main image
const thumbnailList = document.getElementById("thumbnail-list");  // Thumbnail list container

// Function to create and display thumbnail images
function renderThumbnails() {
    images.forEach((image, index) => {
        // Create <li> and <img> for each thumbnail
        const listItem = document.createElement("li");
        const thumbnailImg = document.createElement("img");

        thumbnailImg.src = image.thumbnail;        // Set the thumbnail image source
        thumbnailImg.alt = image.caption;          // Set the alt text for accessibility
        thumbnailImg.dataset.index = index;        // Save the image index for reference

        // Add grayscale style to all thumbnails by default
        thumbnailImg.classList.add("inactive-thumbnail");

        listItem.appendChild(thumbnailImg);        // Add <img> to <li>
        thumbnailList.appendChild(listItem);       // Add <li> to the thumbnail list

        // Add click event to load full-size image and update caption
        thumbnailImg.addEventListener("click", () => {
            updateFullSizeImage(index);            // Call function to change main image
        });
    });
}

// Function to update the main image and caption
function updateFullSizeImage(selectedIndex) {
    const selectedImage = images[selectedIndex];     // Get the selected image info
    fullSizeImage.src = selectedImage.fullSize;      // Update the main image
    figCaption.textContent = selectedImage.caption;  // Update the caption

    // Loop through all thumbnails to update styles
    document.querySelectorAll("#thumbnail-list img").forEach((img, index) => {
        if (index === selectedIndex) {
            img.classList.remove("inactive-thumbnail"); // Remove grayscale for selected image
        } else {
            img.classList.add("inactive-thumbnail");    // Add grayscale for others
        }
    });
}

// Initialize gallery by displaying thumbnails and setting the first image as default
renderThumbnails();        // Add thumbnails to the page
updateFullSizeImage(0);    // Display the first image as the main image
