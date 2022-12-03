// Variabel
const text = document.querySelector("#input"),
      kls = document.querySelector(".kelas"),
      almt = document.querySelector(".alamat"),
      btn = document.querySelector("#btn"),
      msg_box = document.querySelector(".alert"),
      msg = document.querySelector(".msg span"),
      msg_kls = document.querySelector(".msg-kls span"),
      msg_almt = document.querySelector(".msg-almt span")

// Button show
btn.addEventListener("click", () => {
  msg_box.classList.add("active")
  msg.innerHTML = text.value;
  msg_kls.innerHTML = kls.value;
  msg_almt.innerHTML = almt.value;
})

// Button close
let btnClose = document.querySelector(".close span").addEventListener("click", () => {
  msg_box.classList.remove("active")
})