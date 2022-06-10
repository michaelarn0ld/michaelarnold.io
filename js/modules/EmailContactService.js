 /* --------------------------------------------------------------------
 * Contact Email Service sends emails to me@michaelarnold.io via EmailJS
 * ---------------------------------------------------------------------
 *
 *  EmailJS is a way to send emails from HTML for submissions without
 *  setting up any backend code. 
 *
 *  First, we use our API key to connect to and use the EmailJS service.
 *  Then, we target the form on our HTML document from which the data
 *  will be pulled to generate out email. Keep in mind that the input 
 *  property "name" of the form will need to match those in our template.
 *
 *  EX) 
 *  email template field {{ user_name }} refers to <input name="user_name /> 
 *
 *  We then can send the form using emailjs.sendForm(a, b, c) where a is the 
 *  email service id, b is the email template id, and c is the HTML form object.
 *
 *  For more information on use: https://www.emailjs.com/docs/sdk/send-form/
 *
 * -----------------------------------------------------------------
 *
 * ----------------------------------------------------------------- */


export const EmailContactService = () => {
    // Connect to the EmailJS API with my key
    emailjs.init('user_TNTFrlyie1bK82cVI2YDb')

    // Wait until page has loaded to prepare form for submission to email 
    window.onload = () => {
        // grab the contact form from contact.html
        const contactForm = document.getElementById('contact-form')
        console.log(contactForm)
        // when the contact form is submitted, use EmailJS to send an email
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault()                                         
            // EmailJS Admin => service: contact_service, template: contact_form
            emailjs.sendForm('contact_service', 'contact_form', contactForm)       
                .then(() => {                                          
                // reset the form on a successful submission
                contactForm.reset() 
                }, (err) => {                                        
                console.log(err);                        
                })                                                         
            })                                                                 
        }              
}
