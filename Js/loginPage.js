// Add some interactive effect


document.addEventListener("DOMContentLoaded", function () {
  // Add floating animation to the login card
  const loginCard = document.querySelector(".login-card");

  // Add hover effect to form inputs
  const inputs = document.querySelectorAll(".form-control");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.style.transform = "translateY(-2px)";
    });

    input.addEventListener("blur", function () {
      this.parentElement.style.transform = "translateY(0)";
    });
  });

  // Add click effect to social buttons
  const socialBtns = document.querySelectorAll(".btn-social");
  socialBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "translateY(-2px)";
      }, 100);
    });
  });

  // Form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitBtn = this.querySelector(".btn-login");
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin me-2"></i>Signing In...';
    submitBtn.disabled = true;

    // Simulate login process
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Success!';
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    }, 2000);
  });
});
