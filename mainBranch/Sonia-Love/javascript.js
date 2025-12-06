
var isAnimationRunning = false;

function changeColor(color) {
    var body = document.getElementById('body');
    if (body.classList.contains(color)) {
        return;
    }
    setColor(color);
    runAnimation();
}

function setColor(color) {
    var body = document.getElementById('body');
    body.classList.remove('blue', 'pink', 'yellow');
    body.classList.add(color);

    var photo = document.getElementById('photo');
    photo.src = 'assets/img/profile-' + color + '.jpg';

    // Save the selected color to Local Storage
    localStorage.setItem("selectedColor", color);
}

function runAnimation() {
    var svg = document.getElementById("mySVG");

    // Check if the animation is still running
    if (isAnimationRunning) {
        // If the animation is still running, do not proceed with the color change
        return;
    }

    svg.classList.add("run-animation");
    isAnimationRunning = true;

    // Remove the class and update the animation state when the animation ends
    svg.addEventListener("animationend", onAnimationEnd, { once: true });
}

function onAnimationEnd() {
    var svg = document.getElementById("mySVG");
    svg.classList.remove("run-animation");
    isAnimationRunning = false;
}

// Add this function to load the previously selected color from Local Storage
function loadSavedColor() {
    var savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
        setColor(savedColor);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Call this function when the website loads to load the saved color, if any
    loadSavedColor();
    
    // Initialize snowflakes
    createSnowflakes();
});

// Memory gallery data
const memoryData = [
    {
        image: 'assets/img/photo_cute.jpg',
        message: 'Перша зустріч 💕\n\nЦе був момент, коли все змінилося. Ти увійшла в моє життя і зробила його яскравішим.'
    },
    {
        image: 'assets/img/photo_slay.jpg',
        message: 'Ти завжди сяєш ✨\n\nНавіть у найпростіші моменти ти виглядаєш неймовірно. Твоя краса йде зсередини.'
    },
    {
        image: 'assets/img/photo_w_nastia.jpg',
        message: 'Дружба та любов 🤗\n\nТи показуєш, як важлива дружба, і як вона може перерости в щось більше.'
    },
    {
        image: 'assets/img/photo_depeche_mode_with_me.jpg',
        message: 'Наші моменти разом 💖\n\nКожна мить з тобою - це спогад, який я зберігаю в серці назавжди.'
    },
    {
        image: 'assets/img/photo_new_haircut.jpg',
        message: 'Нова ти, така ж прекрасна 🌟\n\nТи завжди експериментуєш і не боїшся змін. Це одна з речей, які я в тебе обожнюю.'
    },
    {
        image: 'assets/img/photo_w_cat.jpg',
        message: 'Твоя доброта до тварин 🐱\n\nТвоя любов до тварин показує, яка ти добра і чуйна людина. Це робить тебе ще особливішою.'
    }
];

// Open memory modal
function openMemoryModal(index) {
    const modal = document.getElementById('memoryModal');
    const modalImage = document.getElementById('modalImage');
    const modalMessage = document.getElementById('modalMessage');
    
    if (memoryData[index]) {
        modalImage.src = memoryData[index].image;
        modalMessage.textContent = memoryData[index].message;
        modal.style.display = 'flex';
    }
}

// Close memory modal
function closeMemoryModal() {
    const modal = document.getElementById('memoryModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('memoryModal');
    if (event.target == modal) {
        closeMemoryModal();
    }
}

// Gift box functions
function openGiftBox(index) {
    const modal = document.getElementById('giftModal' + index);
    if (modal) {
        modal.style.display = 'flex';
        // Add animation class
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function closeGiftBox(index) {
    const modal = document.getElementById('giftModal' + index);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Copy Wolt code to clipboard
function copyWoltCode() {
    const code = document.getElementById('woltCode').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const codeElement = document.getElementById('woltCode');
        const originalText = codeElement.textContent;
        codeElement.textContent = 'Скопійовано! ✓';
        codeElement.style.color = 'var(--hilightColor)';
        setTimeout(() => {
            codeElement.textContent = originalText;
            codeElement.style.color = '';
        }, 2000);
    }).catch(err => {
        console.log('Failed to copy:', err);
    });
}

// Close gift modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('gift-modal')) {
        const modals = document.querySelectorAll('.gift-modal');
        modals.forEach((modal, index) => {
            if (event.target === modal) {
                closeGiftBox(index);
            }
        });
    }
});

// Create snowflakes animation
function createSnowflakes() {
    const container = document.getElementById('snowflakes-container');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        
        // Random position and animation delay
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.animationDuration = (Math.random() * 3 + 5) + 's';
        
        container.appendChild(snowflake);
    }
}
