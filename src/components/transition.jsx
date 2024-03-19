document.addEventListener('DOMContentLoaded', () => {
    const reglink = document.querySelector('.Register-link');
    const loginsec = document.querySelector('.left-container');
    
    console.log("jso");
    
    reglink.addEventListener('click', () => {
        console.log("jo");
        loginsec.classList.add('active');
    });
});
