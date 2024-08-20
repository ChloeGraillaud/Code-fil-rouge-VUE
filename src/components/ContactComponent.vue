<template>
  <div class="contactform">
    <form v-if="!isSubmitted && !isLoading" id="contact-form" @submit.prevent="sendEmail">
      <div class="formgrouprow">
        <div class="formgroup">
          <label for="nom">Nom</label>
          <br />
          <input type="text" id="nom" name="nom" required />
        </div>
        <div class="formgroup">
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div class="formgroup">
        <label for="message">Message</label>
        <br />
        <textarea name="message" id="message" rows="5" required></textarea>
      </div>

      <center>
        <input type="submit" class="buttonform bouton" value="Envoyer" :disabled="isLoading" />
      </center>
    </form>

    
    <div v-if="isLoading" class="spinner-border text-success" role="status">
      <span class="visually-hidden">Envoi en cours...</span>
    </div>

    
    <div v-else-if="isSubmitted">
      <h2>Merci pour votre message ! <br> Je prendrai contact avec vous sous peu.</h2>
    </div>
  </div>
</template>
  
<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      isSubmitted: false,
      isLoading: false,
    };
  },
  methods: {
    sendEmail() {
      this.isLoading = true;
      const form = document.getElementById('contact-form');

      emailjs.sendForm('service_a9jm7uh', 'template_ru317cl', form, 'Xr1CR-irF8-QLAcTO')
        .then((response) => {
          console.log('Success:', response);
          this.isSubmitted = true;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Erreur lors de l\'envoi de l\'email : ' + JSON.stringify(error));
          this.isLoading = false;
        });
    },
  },
};
</script>



  
  <style scoped>
  .contactform {
    transform: scale(1.5);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px;
  }
  .formgroup {
    margin-bottom: 15px;
  }
  .formgroup label {
    display: block;
    margin-bottom: 5px;
  }
  .formgroup input,
  .formgroup textarea {
    background-color: var(--form-background-color);
    color: var(--form-text-color);
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px #011202;
  }
  .formgrouprow {
    display: flex;
    justify-content: space-between;
  }
  .formgroup:first-child {
    margin-right: 200px;
  }
  label {
    font-family: 'Francois One', sans-serif;
    color: rgba(215, 220, 215, 1);
  }
  input[type="submit"] {
    font-family: 'Francois One', sans-serif;
    padding: 13px 30px;
    background-color: #5ba55d;
    border: none;
    border-radius: 25px;
    color: rgba(215, 220, 215, 1);
    font-size: 17px;
    cursor: pointer;
    box-shadow: 2px 2px #011202;
  }
  
  @media only screen and (max-width: 932px) {
    .formgrouprow {
      flex-direction: column;
    }
    .contactform {
      transform: scale(1);
      margin: 0;
      width: 100%;
    }
    label {
      font-size: 24px;
    }
    .buttonform {
      transform: scale(1.2);
    }
  }
  </style>
  