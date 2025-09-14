

export default function showAlert(name, stock) {
  Toastify({
    text: " " + name,
    duration: 1500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: ` ${
        stock == true
          ? "green"
          : "linear-gradient(90deg,rgba(180, 58, 160, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)"
      } `,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}