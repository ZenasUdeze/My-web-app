document.getElementById('transfer-form').addEventListener('submit', function(event) {  
    event.preventDefault();  
    
    const sender = document.getElementById('sender').value;  
    const receiver = document.getElementById('receiver').value;  
    const amount = document.getElementById('amount').value;  

    const message = `Transfer of $${amount} from ${sender} to ${receiver} has been sent successfully.`;  
    document.getElementById('message').innerText = message;  

    // Clear the form  
    this.reset();  
});  