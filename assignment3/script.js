const projectImages = {
    'flipbook-pasar-dewata': [
        "BARONGHEAD.png",
        "RANGDAHEAD.png",
        "CANDIBENTAR.png",
        "FULL SS.png",
        "MERUTOWER.png",
        "BALEGONG.png",
    ],
    'flipbook-youvegotafriendinme-1': [
        "DispenserandBMO.png",
        "DispenserandBMO2.png",
        "DispenserandBMO3.png",
    ],
    'flipbook-youvegotafriendinme-2': [
        "BMO1.png",
        "BMO2.png",
        "BMO3.png",
    ],
    'flipbook-CAISHENRENDER-1': [
        "CaishenDEPAN.png",
        "CAISHENKASIANGPAOSAMPING.png",
        "CAISHENKASIANGPAODEPAN.png",
    ],
    'flipbook-CAISHENBILLBOARD-2': [
        // "CaishenBillboard1.jpeg",
        "CaisshenBilboard2.jpeg",
        "CaishenElavatorwrappedbetter.jpeg", 
        "CaishenLobbyPoster.jpeg",
        "CaishenDeskDisplay.jpeg",
    ],

    'flipbook-SNAKERENDER-1': [
        "WOODSNAKEFORMALL.png",
        "WOODSNAKE2.png",
    ],

    'flipbook-CHINESEGATES-1': [
        "TEKATEKIDRAFT.png",
        "SNAKEWHITE2.png",
        "TEKATEKITRIAL.png",
    ], 

    'flipbook-RAMADHANPILLAR-1': [
        "RAMADHANPILLER1.png",
        "RAMADHANPILLAR1.png",
        "RAMADHANPILLAR3.png",
    ],
     'flipbook-MUDIK-1': [
        "POSEMUDIKDESERT2.png",
        "POSEMUDIK3.png",
        "POSEMUDIKDESERT1.png",
        "MUDIKSKETCH.jpeg",
    ],
};

// I spent a whole day just trying to figure out how flipbooks Worker, I bit more than I could chew


let currentImageIndexes = {};

function initializeFlipbooks() {
    const flipbookContainers = document.querySelectorAll('.image-flipbook');

    flipbookContainers.forEach(container => {
        const flipbookId = container.id;
        const flipbookImageElement = container.querySelector('.flipbook-image'); 

        if (flipbookId && flipbookImageElement && projectImages[flipbookId]) {
            currentImageIndexes[flipbookId] = 0; 
            showImage(flipbookId, currentImageIndexes[flipbookId]);

            
            flipbookImageElement.style.transition = 'opacity 0.3s ease-in-out';
        } else {
            console.warn(`Flipbook with ID '${flipbookId}' not found or no images defined.`);
        }
    });
}

function showImage(flipbookId, index) {
    const container = document.getElementById(flipbookId);
    if (!container) {
        console.error(`Container with ID '${flipbookId}' not found for showImage.`);
        return; 
    }

    const flipbookImageElement = container.querySelector('.flipbook-image');
    const images = projectImages[flipbookId];

    if (flipbookImageElement && images && images.length > 0) {
        flipbookImageElement.style.opacity = '0'; // Satrt fade out
        setTimeout(() => {
            flipbookImageElement.src = images[index];
            flipbookImageElement.style.opacity = '1'; // Fade 
        }, 100);
    } else {
        console.warn(`Images not defined for flipbook ID '${flipbookId}' or image element not found.`);
    }
}

function autoRotateImages() {
  setInterval(() => {
    for (const flipbookId in projectImages) {
      nextImage(flipbookId);
    }
  }, 6000); // every 6 seconds
}
document.addEventListener('DOMContentLoaded', () => {
  initializeFlipbooks();
  autoRotateImages();
});






// go tonext image for a specific flipbook
function nextImage(flipbookId) {
    const images = projectImages[flipbookId];
    if (!images || images.length === 0) return;

    currentImageIndexes[flipbookId] = (currentImageIndexes[flipbookId] + 1) % images.length;
    showImage(flipbookId, currentImageIndexes[flipbookId]);
}

// to previous image for a specific flipbook
function prevImage(flipbookId) {
    const images = projectImages[flipbookId];
    if (!images || images.length === 0) return;

    currentImageIndexes[flipbookId] = (currentImageIndexes[flipbookId] - 1 + images.length) % images.length;
    showImage(flipbookId, currentImageIndexes[flipbookId]);
}

document.addEventListener('DOMContentLoaded', initializeFlipbooks);


document.addEventListener('keydown', function(event) {

});