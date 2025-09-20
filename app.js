// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initEnhancedDynamicBackground();
  initNavigation();
  initTypingAnimation();
  initScrollAnimations();
  initSkillBars();
  initContactForm();
  initProjectCards();
  initHeroButtons();
  initParallaxEffect();
  initMouseInteractions();
  initTimeBasedAnimations();
});

// Enhanced Dynamic Background System with Rich Color Transitions
function initEnhancedDynamicBackground() {
  const background = document.getElementById("dynamicBackground");
  const layers = document.querySelectorAll(".bg-layer");
  const orbs = document.querySelectorAll(".gradient-orb");
  const shapes = document.querySelectorAll(".floating-shape");
  const particles = document.querySelectorAll(".particle");

  let mouseX = 0;
  let mouseY = 0;
  let scrollProgress = 0;
  let timeOffset = 0;

  // ENHANCED: Rich dark color palette with higher lightness values (25-35%)
  const richDarkColors = {
    deepPurple: { h: 271, s: 75, l: 25 },
    richTeal: { h: 191, s: 75, l: 30 },
    darkMagenta: { h: 300, s: 70, l: 28 },
    deepViolet: { h: 262, s: 75, l: 24 },
    darkEmerald: { h: 160, s: 70, l: 25 },
    deepSapphire: { h: 220, s: 75, l: 24 },
    richBurgundy: { h: 0, s: 65, l: 22 },
    darkForest: { h: 140, s: 60, l: 27 },
    deepIndigo: { h: 240, s: 75, l: 22 },
    richCyan: { h: 180, s: 70, l: 27 },
  };

  const colorKeys = Object.keys(richDarkColors);
  let currentColorIndex = 0;

  // ENHANCED: Continuous rich color cycling with smooth transitions
  function updateRichColorTransitions() {
    timeOffset += 0.008; // Slower for smoother transitions

    layers.forEach((layer, index) => {
      const colorIndex1 = (currentColorIndex + index) % colorKeys.length;
      const colorIndex2 = (currentColorIndex + index + 1) % colorKeys.length;
      const color1 = richDarkColors[colorKeys[colorIndex1]];
      const color2 = richDarkColors[colorKeys[colorIndex2]];

      // Enhanced smooth color transitions with richer tones
      const hue1 = color1.h + Math.sin(timeOffset + index) * 25;
      const hue2 = color2.h + Math.cos(timeOffset + index * 0.7) * 20;
      const saturation1 = Math.max(
        60,
        color1.s + Math.sin(timeOffset * 0.5) * 15
      );
      const saturation2 = Math.max(
        60,
        color2.s + Math.cos(timeOffset * 0.3) * 15
      );
      const lightness1 = Math.max(
        20,
        Math.min(35, color1.l + Math.sin(timeOffset * 0.8) * 5)
      );
      const lightness2 = Math.max(
        20,
        Math.min(35, color2.l + Math.cos(timeOffset * 0.6) * 6)
      );

      if (layer.classList.contains("layer-1")) {
        layer.style.background = `linear-gradient(45deg, 
                    hsla(${hue1}, ${saturation1}%, ${lightness1}%, 0.7) 0%, 
                    transparent 50%, 
                    hsla(${hue2}, ${saturation2}%, ${lightness2}%, 0.7) 100%)`;
      } else if (layer.classList.contains("layer-2")) {
        layer.style.background = `radial-gradient(ellipse at ${
          30 + Math.sin(timeOffset) * 25
        }% ${70 + Math.cos(timeOffset) * 25}%, 
                    hsla(${hue1}, ${saturation1}%, ${lightness1}%, 0.6) 0%, 
                    transparent 60%)`;
      } else if (layer.classList.contains("layer-3")) {
        layer.style.background = `linear-gradient(${
          225 + Math.sin(timeOffset) * 50
        }deg, 
                    transparent 30%, 
                    hsla(${hue2}, ${saturation2}%, ${lightness2}%, 0.5) 50%, 
                    transparent 70%)`;
      } else if (layer.classList.contains("layer-4")) {
        layer.style.background = `radial-gradient(circle at ${
          70 + Math.cos(timeOffset) * 25
        }% ${30 + Math.sin(timeOffset) * 25}%, 
                    hsla(${hue1}, ${saturation1}%, ${lightness1}%, 0.4) 0%, 
                    transparent 50%)`;
      }
    });

    // ENHANCED: Update orb colors with richer, more vibrant tones
    orbs.forEach((orb, index) => {
      const colorIndex = (currentColorIndex + index * 2) % colorKeys.length;
      const color = richDarkColors[colorKeys[colorIndex]];
      const hue = color.h + Math.sin(timeOffset + index * 0.5) * 45;
      const saturation = Math.max(
        65,
        color.s + Math.cos(timeOffset * 0.7) * 20
      );
      const lightness = Math.max(
        22,
        Math.min(32, color.l + Math.sin(timeOffset * 1.2) * 6)
      );
      const opacity = 0.85 + Math.sin(timeOffset + index) * 0.15;

      orb.style.background = `radial-gradient(circle, hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity}) 0%, transparent 70%)`;
    });

    // ENHANCED: Update shape colors with dynamic rich tones
    shapes.forEach((shape, index) => {
      const colorIndex1 = (currentColorIndex + index) % colorKeys.length;
      const colorIndex2 = (currentColorIndex + index + 3) % colorKeys.length;
      const color1 = richDarkColors[colorKeys[colorIndex1]];
      const color2 = richDarkColors[colorKeys[colorIndex2]];

      const hue1 = color1.h + Math.sin(timeOffset + index * 0.3) * 35;
      const hue2 = color2.h + Math.cos(timeOffset + index * 0.4) * 30;
      const saturation1 = Math.max(65, color1.s + Math.sin(timeOffset) * 15);
      const saturation2 = Math.max(65, color2.s + Math.cos(timeOffset) * 15);
      const lightness1 = Math.max(
        20,
        Math.min(32, color1.l + Math.sin(timeOffset) * 4)
      );
      const lightness2 = Math.max(
        20,
        Math.min(32, color2.l + Math.cos(timeOffset) * 4)
      );
      const opacity1 = 0.4 + Math.sin(timeOffset + index) * 0.3;
      const opacity2 = 0.5 + Math.cos(timeOffset + index * 1.5) * 0.3;

      shape.style.background = `linear-gradient(${
        45 + index * 90
      }deg, hsla(${hue1}, ${saturation1}%, ${lightness1}%, ${opacity1}), hsla(${hue2}, ${saturation2}%, ${lightness2}%, ${opacity2}))`;
    });

    // ENHANCED: Update particle colors with glowing effects
    particles.forEach((particle, index) => {
      const colorIndex = (currentColorIndex + index) % colorKeys.length;
      const color = richDarkColors[colorKeys[colorIndex]];
      const hue = color.h + Math.sin(timeOffset + index * 0.8) * 60;
      const saturation = Math.max(70, color.s + Math.cos(timeOffset) * 20);
      const lightness = Math.max(
        22,
        Math.min(35, color.l + Math.sin(timeOffset) * 8)
      );
      const opacity = 0.8 + Math.sin(timeOffset + index * 2) * 0.2;

      particle.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
      particle.style.boxShadow = `0 0 ${
        18 + Math.sin(timeOffset + index) * 12
      }px hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    });

    // Cycle through colors every 6 seconds for more variety
    if (Math.floor(timeOffset * 10) % 60 === 0) {
      currentColorIndex = (currentColorIndex + 1) % colorKeys.length;
    }
  }

  // ENHANCED: Rich color interaction effects with mouse movement
  let mouseInteractionTicking = false;
  document.addEventListener("mousemove", function (e) {
    if (!mouseInteractionTicking) {
      requestAnimationFrame(function () {
        mouseX = (e.clientX / window.innerWidth) * 100;
        mouseY = (e.clientY / window.innerHeight) * 100;

        // Create rich colorful blooms instead of dark effects
        orbs.forEach((orb, index) => {
          const speed = 0.3 + index * 0.08;
          const moveX = (mouseX - 50) * speed;
          const moveY = (mouseY - 50) * speed;
          const scale =
            1 + (Math.abs(mouseX - 50) + Math.abs(mouseY - 50)) / 150;

          orb.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;

          // Rich color ripple effect
          const distance = Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2));
          const colorIntensity = Math.max(0.6, 1.2 - distance / 400);
          const currentTime = Date.now() * 0.001;
          const rippleHue = (currentTime * 30 + index * 72) % 360;

          orb.style.filter = `blur(${
            75 + distance * 0.15
          }px) hue-rotate(${rippleHue}deg) brightness(${colorIntensity}) saturate(1.3)`;
        });

        // Enhanced mouse-following particle effects with rich colors
        particles.forEach((particle, index) => {
          const followSpeed = 0.08 + index * 0.03;
          const offsetX = Math.sin(Date.now() * 0.0008 + index) * 25;
          const offsetY = Math.cos(Date.now() * 0.0008 + index) * 20;
          const mouseInfluenceX = (mouseX - 50) * followSpeed;
          const mouseInfluenceY = (mouseY - 50) * followSpeed;

          const currentHue = (mouseX * 3.6 + index * 45) % 360;
          particle.style.filter = `hue-rotate(${currentHue}deg) brightness(1.2) saturate(1.4)`;
          particle.style.transform += ` translate(${
            mouseInfluenceX + offsetX
          }px, ${mouseInfluenceY + offsetY}px)`;
        });

        mouseInteractionTicking = false;
      });
      mouseInteractionTicking = true;
    }
  });

  // ENHANCED: Rich color scroll-based background changes
  let scrollTicking = false;
  function updateBackgroundOnScroll() {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = scrollTop / docHeight;

    // Rich hue shifting through spectrum
    const scrollHueShift = scrollProgress * 180; // Full spectrum rotation
    const scrollIntensity = 1.1 + scrollProgress * 0.4;
    const scrollSaturation = 1.2 + scrollProgress * 0.3;

    layers.forEach((layer, index) => {
      const layerTransform = `translateY(${
        scrollTop * (0.08 + index * 0.04)
      }px) 
                                   rotate(${
                                     scrollProgress * 30 + index * 12
                                   }deg) 
                                   scale(${1 + scrollProgress * 0.15})`;
      layer.style.transform = layerTransform;
      layer.style.filter = `hue-rotate(${scrollHueShift}deg) brightness(${scrollIntensity}) saturate(${scrollSaturation})`;
    });

    // Enhanced scroll-based orb movement with rich colors
    orbs.forEach((orb, index) => {
      const scrollOffset = scrollProgress * 80 * (index % 2 === 0 ? 1 : -1);
      const rotationOffset = scrollProgress * 120 + index * 24;
      const hueShift = scrollProgress * 120 + index * 30;

      orb.style.transform += ` translateY(${scrollOffset}px) rotate(${rotationOffset}deg)`;
      orb.style.filter += ` saturate(${
        1.3 + scrollProgress * 0.5
      }) hue-rotate(${hueShift}deg)`;
    });

    scrollTicking = false;
  }

  window.addEventListener("scroll", function () {
    if (!scrollTicking) {
      requestAnimationFrame(updateBackgroundOnScroll);
      scrollTicking = true;
    }
  });

  // Start continuous rich color animations
  function animateRichBackground() {
    updateRichColorTransitions();
    requestAnimationFrame(animateRichBackground);
  }

  animateRichBackground();
}

// Enhanced Mouse Interaction Effects with Rich Colors
function initMouseInteractions() {
  let clickRipples = [];

  // ENHANCED: Rich colorful click bursts instead of dark effects
  document.addEventListener("click", function (e) {
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";

    // Rich color selection for ripples
    const richColors = [
      { h: 271, s: 75, l: 30 }, // Deep purple
      { h: 191, s: 75, l: 35 }, // Rich teal
      { h: 300, s: 70, l: 32 }, // Dark magenta
      { h: 262, s: 75, l: 28 }, // Deep violet
      { h: 180, s: 70, l: 30 }, // Rich cyan
      { h: 240, s: 75, l: 25 }, // Deep indigo
    ];

    const randomColor =
      richColors[Math.floor(Math.random() * richColors.length)];
    const secondaryColor =
      richColors[(richColors.indexOf(randomColor) + 2) % richColors.length];

    ripple.style.cssText = `
            position: fixed;
            top: ${e.clientY}px;
            left: ${e.clientX}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: radial-gradient(circle, 
                hsla(${randomColor.h}, ${randomColor.s}%, ${randomColor.l}%, 0.9) 0%, 
                hsla(${secondaryColor.h}, ${secondaryColor.s}%, ${secondaryColor.l}%, 0.6) 50%,
                transparent 100%);
            pointer-events: none;
            z-index: 9999;
            animation: clickRippleExpand 1.8s ease-out forwards;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 50px hsla(${randomColor.h}, ${randomColor.s}%, ${randomColor.l}%, 0.8);
        `;

    document.body.appendChild(ripple);
    clickRipples.push(ripple);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
      clickRipples = clickRipples.filter((r) => r !== ripple);
    }, 1800);
  });

  // Enhanced ripple animation styles with rich colors
  if (!document.querySelector("#rich-ripple-styles")) {
    const rippleStyles = document.createElement("style");
    rippleStyles.id = "rich-ripple-styles";
    rippleStyles.textContent = `
            @keyframes clickRippleExpand {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 1;
                }
                50% {
                    width: 250px;
                    height: 250px;
                    opacity: 0.9;
                }
                100% {
                    width: 500px;
                    height: 500px;
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(rippleStyles);
  }
}

// Enhanced Time-based Animation System with Rich Colors
function initTimeBasedAnimations() {
  let timeOfDay = new Date().getHours();

  // ENHANCED: Rich color temperature changes based on time of day
  function updateRichTimeOfDayColors() {
    const background = document.getElementById("dynamicBackground");
    if (!background) return;

    let temperatureShift = 0;
    let saturationShift = 1;
    let brightnessShift = 1;

    if (timeOfDay >= 6 && timeOfDay < 12) {
      // Morning - cooler rich tones
      temperatureShift = -15;
      saturationShift = 1.1;
      brightnessShift = 1.05;
    } else if (timeOfDay >= 12 && timeOfDay < 18) {
      // Afternoon - warm rich tones
      temperatureShift = 10;
      saturationShift = 1.2;
      brightnessShift = 1.1;
    } else if (timeOfDay >= 18 && timeOfDay < 22) {
      // Evening - warmer rich tones
      temperatureShift = 25;
      saturationShift = 1.15;
      brightnessShift = 1.0;
    } else {
      // Night - deeper rich tones
      temperatureShift = -25;
      saturationShift = 1.3;
      brightnessShift = 0.95;
    }

    background.style.filter = `hue-rotate(${temperatureShift}deg) brightness(${brightnessShift}) saturate(${saturationShift})`;

    // Update every hour
    setTimeout(updateRichTimeOfDayColors, 3600000);
  }

  updateRichTimeOfDayColors();
}

// FIXED: Enhanced Navigation with Working Smooth Scroll
function initNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section[id]");

  // Hamburger menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // FIXED: Working smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const targetId = this.getAttribute("href");
      console.log("Navigation link clicked:", targetId);

      if (targetId && targetId.startsWith("#")) {
        // Special handling for different section IDs
        let targetSection = null;

        if (targetId === "#about") {
          targetSection = document.querySelector("#about");
        } else if (targetId === "#projects") {
          targetSection = document.querySelector("#projects");
        } else if (targetId === "#contact") {
          targetSection = document.querySelector("#contact");
        }

        if (targetSection) {
          console.log("Target section found:", targetSection);
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const offsetTop = targetSection.offsetTop - navbarHeight;

          // Scroll with smooth behavior
          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: "smooth",
          });

          // Close mobile menu
          if (hamburger && navMenu) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
          }
        } else {
          console.log("Target section not found for:", targetId);
          // Fallback: try to find any section with matching id
          const fallbackSection = document.getElementById(
            targetId.substring(1)
          );
          if (fallbackSection) {
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const offsetTop = fallbackSection.offsetTop - navbarHeight;
            window.scrollTo({
              top: Math.max(0, offsetTop),
              behavior: "smooth",
            });
          }
        }
      }
    });
  });

  // Enhanced scroll-based navbar changes with rich colors
  let ticking = false;

  function updateNavOnScroll() {
    const scrollY = window.pageYOffset;

    // Enhanced navbar appearance with rich background
    if (navbar) {
      if (scrollY > 100) {
        navbar.classList.add("scrolled");
        navbar.style.background = `rgba(42, 27, 64, ${Math.min(
          0.98,
          0.9 + scrollY * 0.0001
        )})`;
        navbar.style.borderBottomColor = `hsla(${
          271 + scrollY * 0.1
        }, 70%, 25%, ${Math.min(0.6, 0.3 + scrollY * 0.0002)})`;
      } else {
        navbar.classList.remove("scrolled");
        navbar.style.background = "rgba(42, 27, 64, 0.9)";
        navbar.style.borderBottomColor = "rgba(168, 85, 247, 0.3)";
      }
    }

    // Update active navigation link
    let current = "hero";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (
        href === `#${current}` ||
        (current === "hero" && href === "#about" && scrollY < 100)
      ) {
        link.classList.add("active");
      }
    });

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateNavOnScroll);
      ticking = true;
    }
  });
}

// Enhanced Typing Animation with Rich Dynamic Colors
function initTypingAnimation() {
  const typingText = document.getElementById("typingText");
  if (!typingText) return;

  const texts = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Creative Thinker",
    "Digital Innovator",
  ];

  let currentIndex = 0;
  let currentChar = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeWriter() {
    const currentText = texts[currentIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, currentChar - 1);
      currentChar--;
      typeSpeed = 50;
    } else {
      typingText.textContent = currentText.substring(0, currentChar + 1);
      currentChar++;
      typeSpeed = 100;
    }

    // ENHANCED: Rich dynamic color change based on current text
    const richColorPairs = [
      { h1: 191, s1: 75, l1: 35, h2: 271, s2: 75, l2: 30 }, // Teal to Purple
      { h1: 271, s1: 75, l1: 30, h2: 300, s2: 70, l2: 32 }, // Purple to Magenta
      { h1: 300, s1: 70, l1: 32, h2: 262, s2: 75, l2: 28 }, // Magenta to Violet
      { h1: 262, s1: 75, l1: 28, h2: 180, s2: 70, l2: 30 }, // Violet to Cyan
      { h1: 180, s1: 70, l1: 30, h2: 191, s2: 75, l2: 35 }, // Cyan to Teal
    ];

    const colorPair = richColorPairs[currentIndex % richColorPairs.length];
    typingText.style.background = `linear-gradient(135deg, hsl(${colorPair.h1}, ${colorPair.s1}%, ${colorPair.l1}%), hsl(${colorPair.h2}, ${colorPair.s2}%, ${colorPair.l2}%))`;
    typingText.style.webkitBackgroundClip = "text";
    typingText.style.webkitTextFillColor = "transparent";
    typingText.style.backgroundClip = "text";

    if (!isDeleting && currentChar === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typing animation after a short delay
  setTimeout(typeWriter, 1000);
}

// Enhanced Scroll Animations with Rich Color Effects
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const delay = element.getAttribute("data-delay") || 0;

        setTimeout(() => {
          element.classList.add("animate");

          // Add rich dynamic glow effects when elements animate
          if (element.classList.contains("hero-name")) {
            element.style.filter =
              "drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))";
          } else if (element.classList.contains("project-card")) {
            element.style.boxShadow = "0 35px 70px rgba(168, 85, 247, 0.4)";
          } else if (element.classList.contains("skill-card")) {
            element.style.boxShadow = "0 25px 50px rgba(6, 182, 212, 0.3)";
          }
        }, parseInt(delay));

        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  const animateElements = document.querySelectorAll(".scroll-animate");
  animateElements.forEach((el) => {
    observer.observe(el);
  });
}

// Enhanced Skill Bar Animations with Rich Dynamic Colors
function initSkillBars() {
  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillProgress = entry.target.querySelector(".skill-progress");
          if (skillProgress) {
            const skillLevel = skillProgress.getAttribute("data-skill");
            const delay = entry.target.getAttribute("data-delay") || 0;

            setTimeout(() => {
              skillProgress.style.width = skillLevel + "%";

              // ENHANCED: Rich dynamic color based on skill level and type
              const skillColors = [
                { h: 271, s: 75, l: 30 }, // Purple
                { h: 191, s: 75, l: 35 }, // Teal
                { h: 300, s: 70, l: 32 }, // Magenta
                { h: 262, s: 75, l: 28 }, // Violet
                { h: 180, s: 70, l: 30 }, // Cyan
                { h: 240, s: 75, l: 25 }, // Indigo
              ];

              const colorIndex = Math.floor(
                (skillLevel / 100) * skillColors.length
              );
              const skillColor =
                skillColors[Math.min(colorIndex, skillColors.length - 1)];
              const secondaryColor =
                skillColors[(colorIndex + 1) % skillColors.length];

              skillProgress.style.background = `linear-gradient(135deg, hsl(${skillColor.h}, ${skillColor.s}%, ${skillColor.l}%), hsl(${secondaryColor.h}, ${secondaryColor.s}%, ${secondaryColor.l}%))`;
              skillProgress.style.boxShadow = `0 0 30px hsla(${skillColor.h}, ${skillColor.s}%, ${skillColor.l}%, 0.8)`;

              // Enhanced pulse effect with rich colors
              setTimeout(() => {
                skillProgress.style.boxShadow = `0 0 25px hsla(${skillColor.h}, ${skillColor.s}%, ${skillColor.l}%, 0.6)`;
              }, 2000);
            }, parseInt(delay) + 500);
          }

          skillObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    skillObserver.observe(card);
  });
}

// Enhanced Contact Form with Rich Visual Feedback
function initContactForm() {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    const nameField = contactForm.querySelector("#name");
    const emailField = contactForm.querySelector("#email");
    const messageField = contactForm.querySelector("#message");

    // Add dynamic placeholders with rich color animations
    if (nameField) {
      nameField.placeholder = "Your Name";
      nameField.style.pointerEvents = "auto";
      nameField.style.userSelect = "text";
    }
    if (emailField) {
      emailField.placeholder = "your.email@example.com";
      emailField.style.pointerEvents = "auto";
      emailField.style.userSelect = "text";
    }
    if (messageField) {
      messageField.placeholder =
        "Tell me about your project or just say hello!";
      messageField.style.pointerEvents = "auto";
      messageField.style.userSelect = "text";
    }

    // Enhanced field interactions with rich dynamic colors
    [nameField, emailField, messageField].forEach((field) => {
      if (field) {
        field.addEventListener("focus", function () {
          const richHue = 271 + Math.random() * 80; // Rich purple to cyan range
          const saturation = 70 + Math.random() * 15;
          const lightness = 28 + Math.random() * 7;

          this.style.borderColor = `hsl(${richHue}, ${saturation}%, ${
            lightness + 10
          }%)`;
          this.style.boxShadow = `0 0 0 3px hsla(${richHue}, ${saturation}%, ${
            lightness + 5
          }%, 0.4)`;
        });

        field.addEventListener("blur", function () {
          this.style.borderColor = "rgba(75, 85, 101, 0.5)";
          this.style.boxShadow = "";
          validateField(this);
        });

        field.addEventListener("input", function () {
          validateField(this);
        });
      }
    });

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = nameField ? nameField.value.trim() : "";
      const email = emailField ? emailField.value.trim() : "";
      const message = messageField ? messageField.value.trim() : "";

      let isValid = true;

      if (!name || name.length < 2) {
        showFieldError(
          nameField,
          "Please enter a valid name (at least 2 characters)"
        );
        isValid = false;
      }

      if (!email || !isValidEmail(email)) {
        showFieldError(emailField, "Please enter a valid email address");
        isValid = false;
      }

      if (!message || message.length < 10) {
        showFieldError(
          messageField,
          "Please enter a message (at least 10 characters)"
        );
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      // Enhanced submission animation with rich colors
      const submitBtn = contactForm.querySelector(".btn");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.7";
      submitBtn.style.background =
        "linear-gradient(135deg, hsl(180, 70%, 30%), hsl(271, 75%, 28%))";

      setTimeout(() => {
        showNotification(
          "✅ Message sent successfully! I'll get back to you soon.",
          "success"
        );
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.background =
          "linear-gradient(135deg, #a855f7, #06b6d4)";

        // Clear any error states
        [nameField, emailField, messageField].forEach((field) => {
          if (field) {
            clearFieldError(field);
          }
        });
      }, 2500);
    });
  }
}

// Form validation helpers
function validateField(field) {
  const value = field.value.trim();

  switch (field.type) {
    case "text":
      if (value.length < 2) {
        showFieldError(field, "Name must be at least 2 characters");
      } else {
        clearFieldError(field);
      }
      break;
    case "email":
      if (!isValidEmail(value)) {
        showFieldError(field, "Please enter a valid email address");
      } else {
        clearFieldError(field);
      }
      break;
    default:
      if (field.tagName === "TEXTAREA" && value.length < 10) {
        showFieldError(field, "Message must be at least 10 characters");
      } else if (field.tagName === "TEXTAREA") {
        clearFieldError(field);
      }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFieldError(field, message) {
  clearFieldError(field);

  field.style.borderColor = "#ff5555";
  field.style.boxShadow = "0 0 0 3px rgba(255, 85, 85, 0.2)";

  const errorElement = document.createElement("span");
  errorElement.className = "field-error";
  errorElement.textContent = message;
  errorElement.style.cssText = `
        color: #ff5555;
        font-size: 12px;
        margin-top: 4px;
        display: block;
        animation: errorFadeIn 0.3s ease-out;
    `;

  field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
  field.style.borderColor = "";
  field.style.boxShadow = "";

  const errorElement = field.parentNode.querySelector(".field-error");
  if (errorElement) {
    errorElement.remove();
  }
}

// FIXED: Enhanced Project Cards with Working Modal Functionality
function initProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {
    const projectBtn = card.querySelector(".project-btn");
    const projectTitle = card.querySelector(".project-title");

    if (projectBtn && projectTitle) {
      // FIXED: Working click animation and modal trigger
      projectBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        console.log("Project button clicked:", projectTitle.textContent);

        // Rich dynamic color burst effect
        const richHue = Math.random() * 80 + 271; // Rich purple to cyan range
        const saturation = 70 + Math.random() * 15;
        const lightness = 25 + Math.random() * 10;

        this.style.transform = "scale(0.95)";
        this.style.boxShadow = `0 0 35px hsla(${richHue}, ${saturation}%, ${lightness}%, 0.9)`;
        this.style.background = `linear-gradient(135deg, hsl(${richHue}, ${saturation}%, ${lightness}%), hsl(${
          (richHue + 60) % 360
        }, ${saturation}%, ${lightness - 3}%))`;

        setTimeout(() => {
          this.style.transform = "scale(1)";
          this.style.boxShadow = "0 15px 40px rgba(168, 85, 247, 0.4)";
          this.style.background = "linear-gradient(135deg, #a855f7, #06b6d4)";
        }, 150);

        // FIXED: Show the modal
        showProjectModal(projectTitle.textContent);
      });
    }

    // FIXED: Also make the entire card clickable
    card.addEventListener("click", function (e) {
      // Only trigger if not clicking the button directly
      if (!e.target.closest(".project-btn")) {
        const title = this.querySelector(".project-title");
        if (title) {
          console.log("Project card clicked:", title.textContent);
          showProjectModal(title.textContent);
        }
      }
    });

    // Enhanced hover effects with rich color morphing
    card.addEventListener("mouseenter", function () {
      const richHue = 271 + Math.random() * 90; // Extended rich color range
      const saturation = 65 + Math.random() * 20;
      const lightness = 25 + Math.random() * 8;

      this.style.transform = "translateY(-15px) scale(1.02)";
      this.style.boxShadow = `0 35px 70px hsla(${richHue}, ${saturation}%, ${lightness}%, 0.5)`;
      this.style.borderColor = `hsla(${richHue}, ${saturation}%, ${
        lightness + 10
      }%, 0.6)`;
      this.style.filter = `hue-rotate(${
        Math.random() * 40 - 20
      }deg) saturate(1.2)`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "";
      this.style.borderColor = "rgba(168, 85, 247, 0.3)";
      this.style.filter = "";
    });
  });
}

// FIXED: Enhanced Hero Button Functionality with Working Navigation
function initHeroButtons() {
  const heroButtons = document.querySelectorAll(".hero-buttons .btn");

  heroButtons.forEach((button) => {
    // FIXED: Hero button click handling with proper navigation
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const href = this.getAttribute("href");
      console.log("Hero button clicked, href:", href);

      if (href && href.startsWith("#")) {
        // Determine target section
        let targetSection = null;

        if (href === "#projects") {
          targetSection = document.querySelector("#projects");
        } else if (href === "#contact") {
          targetSection = document.querySelector("#contact");
        }

        if (targetSection) {
          console.log("Target section found:", targetSection);
          const navbar = document.querySelector(".navbar");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const offsetTop = targetSection.offsetTop - navbarHeight;

          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: "smooth",
          });
        } else {
          console.log("Target section not found for:", href);
          // Fallback: try direct element selection
          const fallbackSection = document.getElementById(href.substring(1));
          if (fallbackSection) {
            const navbar = document.querySelector(".navbar");
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const offsetTop = fallbackSection.offsetTop - navbarHeight;
            window.scrollTo({
              top: Math.max(0, offsetTop),
              behavior: "smooth",
            });
          }
        }
      }
    });

    // Enhanced hover effects with rich dynamic colors
    button.addEventListener("mouseenter", function () {
      const richHue = 271 + Math.random() * 70;
      const saturation = 70 + Math.random() * 15;
      const lightness = 28 + Math.random() * 7;

      this.style.background = `linear-gradient(135deg, hsl(${richHue}, ${saturation}%, ${lightness}%), hsl(${
        (richHue + 40) % 360
      }, ${saturation}%, ${lightness - 3}%))`;
    });

    button.addEventListener("mouseleave", function () {
      this.style.background = "";
    });
  });
}

// Enhanced Parallax Effect with Rich Dynamic Elements
function initParallaxEffect() {
  const heroContent = document.querySelector(".hero-content");
  let ticking = false;

  function updateParallax() {
    const scrollTop = window.pageYOffset;
    const rate = scrollTop * -0.25; // Slightly reduced for smoother effect
    const rotation = scrollTop * 0.015;
    const scale = 1 - scrollTop * 0.0001;

    if (heroContent) {
      heroContent.style.transform = `translateY(${rate}px) rotate(${rotation}deg) scale(${Math.max(
        0.85,
        scale
      )})`;

      // Add rich color shift during parallax
      const hueShift = scrollTop * 0.2;
      heroContent.style.filter = `hue-rotate(${hueShift}deg) saturate(1.1)`;
    }

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking && window.pageYOffset < window.innerHeight) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}

// FIXED: Enhanced Project Modal with Rich Dynamic Styling and Working Functionality
function showProjectModal(projectTitle) {
  console.log("showProjectModal called with:", projectTitle);

  // Remove any existing modal
  const existingModal = document.querySelector(".project-modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Remove any existing styles
  const existingModalStyles = document.querySelector("#project-modal-styles");
  if (existingModalStyles) {
    existingModalStyles.remove();
  }

  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${projectTitle}</h3>
                <button class="modal-close" type="button">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-icon">🚀</div>
                <p><strong>Project launching soon!</strong></p>
                <p>Thank you for your interest in <strong>${projectTitle}</strong>. This project is currently in development and will be available soon with full functionality and live demo.</p>
                <p>In the meantime, feel free to explore my other work or get in touch to discuss potential collaborations!</p>
                <div class="modal-actions">
                    <button class="btn btn--primary modal-close" type="button">Got it!</button>
                    <button class="btn btn--outline modal-contact" type="button">Contact Me</button>
                </div>
            </div>
        </div>
    `;

  // Rich dynamic modal styling
  const richColors = [
    { h: 271, s: 75, l: 25 },
    { h: 191, s: 75, l: 30 },
    { h: 300, s: 70, l: 28 },
    { h: 262, s: 75, l: 24 },
    { h: 180, s: 70, l: 27 },
  ];
  const randomColor = richColors[Math.floor(Math.random() * richColors.length)];
  const secondaryColor =
    richColors[(richColors.indexOf(randomColor) + 2) % richColors.length];

  const modalStyles = document.createElement("style");
  modalStyles.id = "project-modal-styles";
  modalStyles.textContent = `
        .project-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .project-modal.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(42, 27, 64, 0.92);
            backdrop-filter: blur(15px);
            animation: modalOverlayShimmer 4s ease-in-out infinite alternate;
        }
        
        @keyframes modalOverlayShimmer {
            0% { background: rgba(42, 27, 64, 0.92); }
            100% { background: rgba(53, 35, 74, 0.95); }
        }
        
        .project-modal .modal-content {
            background: linear-gradient(135deg, 
                hsla(${randomColor.h}, ${randomColor.s - 5}%, ${
    randomColor.l - 3
  }%, 0.95), 
                hsla(${secondaryColor.h}, ${secondaryColor.s}%, ${
    secondaryColor.l + 2
  }%, 0.9));
            backdrop-filter: blur(25px);
            border: 1px solid hsla(${randomColor.h}, ${randomColor.s + 5}%, ${
    randomColor.l + 15
  }%, 0.4);
            border-radius: 24px;
            max-width: 520px;
            width: 90%;
            max-height: 80vh;
            overflow: hidden;
            transform: scale(0.8) translateY(50px);
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            z-index: 10001;
            box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 120px hsla(${
              randomColor.h
            }, ${randomColor.s}%, ${randomColor.l + 5}%, 0.3);
            animation: modalContentGlow 5s ease-in-out infinite alternate;
        }
        
        @keyframes modalContentGlow {
            0% { box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 120px hsla(${
              randomColor.h
            }, ${randomColor.s}%, ${randomColor.l + 5}%, 0.3); }
            100% { box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), 0 0 160px hsla(${
              secondaryColor.h
            }, ${secondaryColor.s}%, ${secondaryColor.l + 8}%, 0.4); }
        }
        
        .project-modal.show .modal-content {
            transform: scale(1) translateY(0);
        }
        
        .project-modal .modal-header {
            padding: 28px;
            border-bottom: 1px solid hsla(${randomColor.h}, ${
    randomColor.s
  }%, ${randomColor.l + 15}%, 0.3);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .project-modal .modal-header h3 {
            margin: 0;
            color: #f5f5f5;
            font-size: 1.6rem;
            background: linear-gradient(135deg, hsl(${randomColor.h}, ${
    randomColor.s + 10
  }%, ${randomColor.l + 20}%), hsl(${secondaryColor.h}, ${
    secondaryColor.s + 5
  }%, ${secondaryColor.l + 15}%));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .project-modal .modal-close {
            background: none;
            border: none;
            color: #f5f5f5;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .project-modal .modal-close:hover {
            background: hsla(${randomColor.h}, ${randomColor.s}%, ${
    randomColor.l + 10
  }%, 0.3);
            transform: rotate(90deg) scale(1.1);
        }
        
        .project-modal .modal-body {
            padding: 36px 28px 28px;
            color: #f5f5f5;
            text-align: center;
        }
        
        .modal-icon {
            font-size: 3.5rem;
            margin-bottom: 20px;
            animation: bounce 2s infinite, iconColorShift 4s ease-in-out infinite;
        }
        
        @keyframes iconColorShift {
            0% { filter: hue-rotate(0deg) saturate(1.2); }
            50% { filter: hue-rotate(180deg) saturate(1.5); }
            100% { filter: hue-rotate(360deg) saturate(1.2); }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-12px);
            }
            60% {
                transform: translateY(-6px);
            }
        }
        
        .project-modal .modal-body p {
            margin-bottom: 18px;
            line-height: 1.7;
            color: #c0c0c0;
        }
        
        .project-modal .modal-body p:first-of-type {
            font-size: 1.25rem;
            margin-bottom: 24px;
            color: #f5f5f5;
        }
        
        .project-modal .modal-actions {
            margin-top: 36px;
            display: flex;
            gap: 14px;
            justify-content: center;
        }
        
        .project-modal .modal-actions .btn {
            padding: 14px 28px;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
        }
        
        .project-modal .modal-actions .btn--primary {
            background: linear-gradient(135deg, hsl(${randomColor.h}, ${
    randomColor.s + 5
  }%, ${randomColor.l + 8}%), hsl(${secondaryColor.h}, ${secondaryColor.s}%, ${
    secondaryColor.l + 5
  }%));
            color: #f5f5f5;
            border: none;
        }
        
        .project-modal .modal-actions .btn--outline {
            background: transparent;
            border: 2px solid hsla(${randomColor.h}, ${randomColor.s}%, ${
    randomColor.l + 15
  }%, 0.6);
            color: #f5f5f5;
        }
    `;

  document.head.appendChild(modalStyles);
  document.body.appendChild(modal);

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
      if (modal.parentNode) {
        document.body.removeChild(modal);
      }
      if (modalStyles.parentNode) {
        document.head.removeChild(modalStyles);
      }
    }, 300);
  }

  // FIXED: Event listeners with proper functionality
  const overlay = modal.querySelector(".modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  const closeButtons = modal.querySelectorAll(".modal-close");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  });

  const contactButton = modal.querySelector(".modal-contact");
  if (contactButton) {
    contactButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
      setTimeout(() => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          console.log("Navigating to contact section from modal");
          const navbar = document.querySelector(".navbar");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const offsetTop = contactSection.offsetTop - navbarHeight;
          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: "smooth",
          });
        }
      }, 300);
    });
  }

  // Escape key handler
  const handleEscape = function (e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);

  console.log("Modal created and shown successfully");
}

// Enhanced Notification System with Rich Dynamic Styling
function showNotification(message, type = "info") {
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = `notification notification--${type}`;

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };

  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
        <div class="notification-progress"></div>
    `;

  // Rich color selection for notifications
  const richColors = [
    { h: 271, s: 75, l: 25 },
    { h: 191, s: 75, l: 30 },
    { h: 300, s: 70, l: 28 },
    { h: 180, s: 70, l: 27 },
  ];
  const randomColor = richColors[Math.floor(Math.random() * richColors.length)];
  const secondaryColor =
    richColors[(richColors.indexOf(randomColor) + 2) % richColors.length];

  const notificationStyles = document.createElement("style");
  notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 120px;
            right: 24px;
            z-index: 10000;
            background: linear-gradient(135deg, 
                hsla(${randomColor.h}, ${randomColor.s - 10}%, ${
    randomColor.l - 2
  }%, 0.95), 
                hsla(${secondaryColor.h}, ${secondaryColor.s - 5}%, ${
    secondaryColor.l + 1
  }%, 0.9));
            backdrop-filter: blur(25px);
            border: 1px solid hsla(${randomColor.h}, ${randomColor.s}%, ${
    randomColor.l + 15
  }%, 0.4);
            border-radius: 16px;
            color: #f5f5f5;
            transform: translateX(450px);
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            max-width: 420px;
            min-width: 320px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 80px hsla(${
              randomColor.h
            }, ${randomColor.s}%, ${randomColor.l}%, 0.3);
            animation: notificationGlow 4s ease-in-out infinite alternate;
        }
        
        @keyframes notificationGlow {
            0% { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 80px hsla(${
              randomColor.h
            }, ${randomColor.s}%, ${randomColor.l}%, 0.3); }
            100% { box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 100px hsla(${
              secondaryColor.h
            }, ${secondaryColor.s}%, ${secondaryColor.l}%, 0.4); }
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification--success {
            border-left: 4px solid hsl(160, 70%, 35%);
        }
        
        .notification--error {
            border-left: 4px solid hsl(0, 70%, 50%);
        }
        
        .notification--info {
            border-left: 4px solid hsl(${randomColor.h}, ${randomColor.s}%, ${
    randomColor.l + 10
  }%);
        }
        
        .notification--warning {
            border-left: 4px solid hsl(45, 75%, 50%);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 18px 24px;
        }
        
        .notification-icon {
            font-size: 1.3rem;
            flex-shrink: 0;
            animation: iconPulse 2.5s ease-in-out infinite;
        }
        
        @keyframes iconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
        }
        
        .notification-message {
            flex: 1;
            line-height: 1.5;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: rgba(245, 245, 245, 0.8);
            font-size: 1.6rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
            flex-shrink: 0;
        }
        
        .notification-close:hover {
            background: hsla(${randomColor.h}, ${randomColor.s}%, ${
    randomColor.l + 10
  }%, 0.3);
            color: #f5f5f5;
            transform: scale(1.1);
        }
        
        .notification-progress {
            height: 4px;
            background: linear-gradient(135deg, hsl(${randomColor.h}, ${
    randomColor.s + 10
  }%, ${randomColor.l + 10}%), hsl(${secondaryColor.h}, ${
    secondaryColor.s + 5
  }%, ${secondaryColor.l + 8}%));
            width: 100%;
            transform-origin: left;
            animation: progress 5.5s linear forwards;
        }
        
        @keyframes progress {
            from {
                transform: scaleX(1);
            }
            to {
                transform: scaleX(0);
            }
        }
    `;

  document.head.appendChild(notificationStyles);
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", function () {
    removeNotification();
  });

  function removeNotification() {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
      if (notificationStyles.parentNode) {
        document.head.removeChild(notificationStyles);
      }
    }, 300);
  }

  // Auto remove after 5.5 seconds
  setTimeout(removeNotification, 5500);
}

// Enhanced Loading Animation with Rich Colors
window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  // Trigger initial hero animations with stagger and rich dynamic effects
  const heroElements = [
    { selector: ".hero-name", delay: 0 },
    { selector: ".hero-title", delay: 200 },
    { selector: ".hero-tagline", delay: 400 },
    { selector: ".hero-buttons", delay: 600 },
    { selector: ".hero-social", delay: 800 },
  ];

  heroElements.forEach((item) => {
    const element = document.querySelector(item.selector);
    if (element) {
      setTimeout(() => {
        element.classList.add("animate");
        // Add rich dynamic glow effects
        if (element.classList.contains("hero-name")) {
          element.style.filter =
            "drop-shadow(0 0 45px rgba(168, 85, 247, 0.7))";
        }
      }, item.delay);
    }
  });
});

// Performance Optimization with Rich Color Support
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize performance optimizations with rich color support
document.documentElement.style.setProperty("--mouse-x", "50%");
document.documentElement.style.setProperty("--mouse-y", "50%");

// Enhanced mouse tracking for rich dynamic interactions
const throttledMouseMove = throttle(function (e) {
  const mouseX = (e.clientX / window.innerWidth) * 100;
  const mouseY = (e.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty("--mouse-x", mouseX + "%");
  document.documentElement.style.setProperty("--mouse-y", mouseY + "%");

  // Update rich dynamic CSS properties for interactive effects
  const richHue = (mouseX * 2.8 + 271) % 360; // Start from rich purple
  document.documentElement.style.setProperty("--mouse-hue", richHue);
  document.documentElement.style.setProperty(
    "--mouse-intensity",
    Math.min(100, mouseY)
  );
  document.documentElement.style.setProperty(
    "--mouse-saturation",
    Math.max(60, 70 + mouseY * 0.3)
  );
}, 16);

document.addEventListener("mousemove", throttledMouseMove);

// Add initial loading styles with enhanced rich color animations
const initialStyles = document.createElement("style");
initialStyles.textContent = `
    body:not(.loaded) .hero-name,
    body:not(.loaded) .hero-title,
    body:not(.loaded) .hero-tagline,
    body:not(.loaded) .hero-buttons,
    body:not(.loaded) .hero-social {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .hero-name, .hero-title, .hero-tagline, .hero-buttons, .hero-social {
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .hero-name.animate,
    .hero-title.animate,
    .hero-tagline.animate,
    .hero-buttons.animate,
    .hero-social.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes errorFadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(initialStyles);
