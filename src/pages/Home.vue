<template>
    <div>
       <navbar />
       <section class="home">
   
   <div class="image">
       <img src="images/profile (2).png" alt="">
   </div>
   
   <div class="content">
       <h3>"Underwear Shop"</h3>
       <span>"Good For All Style"</span>
       <p>   เราเป็นแบรนด์ขายกางเกงในที่มีคุณภาพเหมาะแก่ผู้ใส่แบรนด์ของเรา
          โดยราคาเป็นมิตรสามรถจับต้องได้และเราได้ใช้วัสดุที่มีความคุ้มค่าต่อราคา
          ซึ่งเราจะมีสินค้าตามฤดูกาลเพื่อให้ผู้ใช้ได้ใช้สิค้าเหมาะสมตามฤดูกาลนั้นๆ
        </p>
       
   
   </div>
   <div class="content">
       <p> <span>Easy To Waer : </span> It made good look at! </p>
       <p> <span>Easy Pickup : </span> Easy to take care of it!! </p>
       <p> <span>So comfy :  </span>It so comfy cause we use polyester and cotton  </p>
   </div>
   
   </section>
    </div>
   </template>
   
   <script>
   import Navbar from '../components/Navbar.vue';
   import axios from 'axios'
   
   
   export default {
       components: { Navbar },
       methods: {
           async fetchExperience() {
               try {
                   let res = await axios.get("https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/experiences")
                   this.experience = res.data
               } catch (error) {
           
               }
           }
            
       },
       data() { 
           return { 
               experience: []
           }
       },
       beforeMount() {
           this.fetchExperience()
       }
   
               
       } 
   
   </script>
   
   <style>
   
   </style>