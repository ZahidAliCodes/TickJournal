 const fileInput = document.getElementById('fileInput');
 const imagePreview = document.getElementById('imagePreview');
 const deleteButton = document.getElementById('deleteButton');

 imagePreview.src = "preview.svg";

 fileInput.addEventListener('change', function () {
   const file = fileInput.files[0];

   if (file) {
     const reader = new FileReader();

     reader.onload = function (e) {
       imagePreview.src = e.target.result;
       deleteButton.style.display = 'block'; 
     };

     reader.readAsDataURL(file);
   }
 });

 function deleteImage() {
   imagePreview.src = 'preview.svg'; 
   deleteButton.style.display = 'block';
   fileInput.value = ''; 
 }
