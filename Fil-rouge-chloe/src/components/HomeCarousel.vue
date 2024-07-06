<template>
  <div>
    <div class="container d-flex text-center testimonial-title">
      <h2>Quelques témoignages</h2>
    </div>
    <div id="testimonialCarousel" class="carousel slide testimonial-carousel" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-inner">
        <div 
          v-for="(group, index) in groupedTestimonials" 
          :key="index" 
          :class="['carousel-item', { active: index === 0 }]">
          <div class="d-flex justify-content-center">
            <div class="testimonial-item" v-for="testimonial in group" :key="testimonial.id">
              <p>{{ testimonial.quote }}</p>
              <h4>{{ testimonial.author }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TestimonialCarousel',
  data() {
    return {
      testimonials: [],
      groupedTestimonials: []
    };
  },
  mounted() {
    this.loadTestimonials();
    window.addEventListener('resize', this.groupTestimonials);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.groupTestimonials);
  },
  methods: {
    async loadTestimonials() {
      try {
        const response = await axios.get('/data.json');
        this.testimonials = response.data;
        this.groupTestimonials();
      } catch (error) {
        console.error('Error loading testimonials:', error);
      }
    },
    groupTestimonials() {
      const groups = [];
      if (window.innerWidth <= 932) {
        
        for (let i = 0; i < this.testimonials.length; i++) {
          groups.push([this.testimonials[i]]);
        }
      } else {
        
        for (let i = 0; i < this.testimonials.length; i += 3) {
          groups.push(this.testimonials.slice(i, i + 3));
        }
      }
      this.groupedTestimonials = groups;
    }
  }
};
</script>

<style scoped>
.testimonial-title h2 {
  text-align: center;
  width: 100%;
  margin: 0 0 30px auto;
}
.testimonial-carousel {
  width: 80%;
  margin: auto;
  overflow: hidden;
}
.testimonial-item {
  background: rgb(240, 247, 242);
  filter: brightness(var(--image-dark-brightness));
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 250px;
  text-align: center;
  box-sizing: border-box;
  margin: 0 10px;
}
.testimonial-item p {
  font-style: italic;
  color: #555;
}
.testimonial-item h4 {
  margin-top: 10px;
  color: #011202;
}
</style>


  