const loading=()=>{
const loader = document.getElementById('loader');

function showLoader() {
    loader.style.display = 'inline-block'; // Show loader
}

function hideLoader() {
    loader.style.display = 'none'; // Hide loader
}

// Simulate a process
showLoader();
setTimeout(hideLoader, 3000); // Hide after 3 seconds
}
export { loading };