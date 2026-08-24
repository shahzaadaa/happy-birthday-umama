// ================================
// Happy Birthday Umama 💖
// My Wife & My Best Friend
// By Muneeb ❤️
// ================================

// Hide loader after 2 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "none";
    }, 2000);
});

const startBtn = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");
const giftSection = document.getElementById("giftSection");
const cakeSection = document.getElementById("cakeSection");
const letterSection = document.getElementById("letterSection");
const finalSection = document.getElementById("finalSection");

const popup = document.getElementById("popup");
const giftMessage = document.getElementById("giftMessage");
const closePopup = document.getElementById("closePopup");

const music = document.getElementById("music");

// Start button trigger
if (startBtn) {
    startBtn.addEventListener("click", () => {
        const sections = [surprise, giftSection, cakeSection, letterSection, finalSection];
        
        sections.forEach(sec => {
            if (sec) {
                sec.classList.remove("hidden");
                sec.classList.add("fadeIn");
            }
        });

        if (music) {
            music.play().catch(() => {});
        }

        launchConfetti();

        if (surprise) {
            surprise.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// 📦 GIFT OPENER FUNCTION (Personalized for Umama)
function openGift(number) {
    if (!popup || !giftMessage) return;

    popup.style.setProperty('display', 'flex', 'important');
    popup.classList.remove("hidden");

    switch(number) {
        case 1:
            giftMessage.innerHTML = "🎂 Happy Birthday to my gorgeous wife, Umama! You mean the absolute world to me.";
            break;
        case 2:
            giftMessage.innerHTML = "🌸 May Allah bless you with continuous happiness, success, health, and peace in every step of your life.";
            break;
        case 3:
            giftMessage.innerHTML = "❤️ Thank you for being my wife, my partner, and my absolute best friend.<br><br>Forever Yours,<br><strong>Muneeb</strong>";
            break;
    }
}

// 📦 POPUP CLOSE HANDLERS
if (closePopup) {
    closePopup.onclick = () => {
        popup.style.setProperty('display', 'none', 'important');
        popup.classList.add("hidden");
    };
}

// Close popup if clicking outside content box
window.onclick = (e) => {
    if (e.target === popup) {
        popup.style.setProperty('display', 'none', 'important');
        popup.classList.add("hidden");
    }
};

// Blow Candle
const blowBtn = document.getElementById("blowBtn");
const flame = document.querySelector(".flame");

if (blowBtn) {
    blowBtn.onclick = () => {
        if (flame) {
            flame.style.display = "none";
        }
        blowBtn.innerHTML = "🎉 Wish Granted for Umama!";
        launchConfetti();
    };
}

// Smooth Confetti Engine
function launchConfetti() {
    const canvas = document.getElementById("confetti");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    
    const colors = ['#ff4d6d', '#ff758c', '#ffd166', '#ffffff', '#a18cd1'];

    for (let i = 0; i < 180; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 3,
            dy: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.y += p.dy;
            if (p.y > canvas.height) {
                p.y = -20;
            }
        });

        frame++;
        if (frame < 300) {
            requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    draw();
}

// Handle Window Resize
window.addEventListener("resize", () => {
    const canvas = document.getElementById("confetti");
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
