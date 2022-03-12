
    function editForm() {
      // display
      var name = document.getElementById("displayName");
      var displayRole = document.getElementById("displayRole");
      var displayAge = document.getElementById("displayAge");
      var displayPengalaman = document.getElementById("displayPengalaman");
      var displayEmail = document.getElementById("displayEmail");

      // form
      var inputName = document.getElementById("name");
      inputName.value = name.innerText;

      var inputRole = document.getElementById("role");
      inputRole.value = displayRole.innerText;

      var inputAvailability = document.getElementById("availability");

      var inputAge = document.getElementById("age");
      inputAge.value = displayAge.innerText;

      var inputPengalaman = document.getElementById("pengalaman")
      inputPengalaman.value = displayPengalaman.innerText;

      var inputEmail = document.getElementById("email");
      inputEmail.value = displayEmail.innerText;
    }

    function submitData() {
      // display

      if (confirm("Apakah anda ingin mengubah data ?")) {
        var name = document.getElementById("displayName");
        var role = document.getElementById("displayRole");
        var availability = document.getElementById("displayAvailability");
        var age = document.getElementById("displayAge");
        var pengalaman = document.getElementById("displayPengalaman");
        var email = document.getElementById("displayEmail");

        // form
        var inputName = document.getElementById("name");
        name.innerText = inputName.value;

        var inputRole = document.getElementById("role");
        role.innerText = inputRole.value;

        var inputAvailability = document.getElementById("availability");
        availability.innerText = inputAvailability.value;

        var inputAge = document.getElementById("age");
        age.innerText = inputAge.value;

        var inputPengalaman = document.getElementById("pengalaman");
        pengalaman.innerText = inputPengalaman.value;

        var inputEmail = document.getElementById("email");
        email.innerText = inputEmail.value;
        alert("Data berhasil diubah");
      }
    }

    function editForm() {
            var tombol = document.getElementById("sectionBioForm");
            if (tombol.style.display === "none") {
              tombol.style.display = "block";
            } else {
              tombol.style.display = "none";
            }
          }