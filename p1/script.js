function displayImage(imageId) {
    document.getElementById(imageId).style.display = "block";
}
document.getElementById("volleyball-btn").addEventListener("click", function() {
    displayImage("volleyball");
});
document.getElementById("shark-btn").addEventListener("click", function() {
    displayImage("shark");
});         
document.getElementById("car-btn").addEventListener("click", function() {
    displayImage("car");
}); 
document.getElementById("submarine-btn").addEventListener("click", function() {
    displayImage("submarine");
});
document.getElementById("bridge-btn").addEventListener("click", function() {
    displayImage("bridge");
});