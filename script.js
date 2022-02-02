const clouds = document.querySelectorAll('.cloud'),
    birds = document.querySelectorAll('.bird'),
    suns = document.querySelectorAll('.sunRise'),
    flows = document.querySelectorAll('.flow')
window.addEventListener('scroll', () => {
    let windowY = window.scrollY
    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(${windowY * speed}px)`
    }
    for (let i = 0; i < birds.length; i++) {
        const bird = birds[i];
        let speed = bird.getAttribute('speed')
        bird.style.transform = `scale(${windowY * speed}) translateY(${windowY * speed}px) translateX(${windowY * speed}px)`
    }
    for (let i = 0; i < flows.length; i++) {
        const flow = flows[i];
        let speed = flow.getAttribute('speed')
        flow.style.transform = `translateX(${windowY * speed}px)`
    }
    for (let i = 0; i < suns.length; i++) {
        const sunRise = suns[i];
        let speed = sunRise.getAttribute('speed')
        sunRise.style.transform = `translateX(${windowY * speed}px) translateY(${windowY * speed}px)`
    }

    // let speed = sun.getAttribute('speed')
    // sun.style.transform = `translateY(${windowY}px)`

})
