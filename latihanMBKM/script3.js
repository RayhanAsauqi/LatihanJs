function validasi() {
  let nama = document.getElementById("nama").value;

  if (nama != "") {
    return true;
  } else {
    alert('Isi nama kamu!!')
  }
}
