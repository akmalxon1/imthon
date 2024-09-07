function login() {
    const modmeId = document.getElementById('modmeId').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
 
     
 

    const correctModmeId = 'akmalxon';
    const correctPassword = 'akmal_2010';
     




    if (modmeId === correctModmeId && password === correctPassword) {
        messageDiv.style.color = 'green';
        messageDiv.style.fontSize = '25px'; 
        messageDiv.style.fontWeight = 'bold'; 
        messageDiv.style.textAlign = 'center'; 
        messageDiv.textContent = 'Kirish muvaffaqiyatli! Siz spacega kirdingiz.';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.style.fontSize = '25px'; 
        messageDiv.style.fontWeight = 'bold';
        messageDiv.style.textAlign = 'center'; 
        messageDiv.textContent = 'ID yoki parol xato. Iltimos, qayta urinib koring.';
    }
         

  


    console.log(modmeId, password);

}


 
function addComment() {
    
    const commentInput = document.getElementById('comment');
    const commentText = commentInput.value.trim();


    if (commentText !== "") {
 
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.textContent = commentText;


        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.appendChild(newComment);

        commentInput.value = "";

    }
} 

