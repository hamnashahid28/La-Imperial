var navbar = document.getElementById("navbar");
 navbar.innerHTML = `
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-brand "><a href="index.html"><img src="ASSETS/IMG/la_imperial-removebg-preview.png" ></a></div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navigationbar">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item mx-2 ">
                        <a href="index.html" class="nav-link fw-bold">Home</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="about.html" class="nav-link fw-bold">About</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="contact.html" class="nav-link fw-bold">Contact</a>
                    </li>

                    <li class="nav-item mx-2">
                        <a href="product.html" class="nav-link fw-bold">Products</a>
                    </li>
                </ul>
                <div> <button class="btn btn-primary" style=" border: none;" onclick="loginSuccess()">Login</button></div>
                <div id="loginMessage" class="login-message">You are Successfully Logged In!</div>
            </div>
           
        </div>
    </nav>`;
    // footer
    var navbar = document.getElementById("footer");
 navbar.innerHTML = `<footer class="footer mt-5" >
  <div class="container py-5">
    <div class="row">

      <!-- Company Info -->
      <div class="col-md-3 col-sm-6 mb-4">
       <h4 style="color: white;" class="fw-bold">LA IMPERIAL</h4>
        <p class="footer-text">
          La Imperial has been providing quality home appliances for over 20 years,
          offering trusted brands and modern technology across Pakistan.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="col-md-3 col-sm-6 mb-4">
        <h5 class="footer-title">Quick Links</h5>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="product.html">Products</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <!-- Categories -->
      <div class="col-md-3 col-sm-6 mb-4">
        <h5 class="footer-title">Categories</h5>
        <ul class="footer-links">
          <li>Refrigerators</li>
          <li>Washers & Dryers</li>
          <li>Cooling & Heating</li>
          <li>Kitchen Appliances</li>
          <li>Televisions & Entertainment</li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="col-md-3 col-sm-6 mb-4 ">
        <h5 class="footer-title">Contact Us</h5>
        <p><i class="fas fa-map-marker-alt"></i>Aptech Metro Star Gate,Karachi</p>
        <p><i class="fas fa-phone"></i> +92 300 1234567</p>
        <p>
          <i class="fas fa-envelope"></i>
          <a href="mailto:hamnaaptech66@gmail.com">la-imperial@gmail.com</a>
        </p>

        <!-- Social Icons -->
        <div class="footer-social mt-3">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="footer-bottom text-center py-3">
    © 2026 La Imperial Appliances. All Rights Reserved.
  </div>
</footer>`;
// login button
function loginSuccess(){
  const msg = document.getElementById("loginMessage");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  },3000);
}