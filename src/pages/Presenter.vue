<template>
 <div>
    <navbar />
    <section class="home">
<div class="row">
  <div class="column" align="center">
    <img src="images/Wolf.jpg" alt="Wolf" style="width:30%">
    <img src="images/Ricardo.jpg" alt="Ricardo" style="width:40%">
    <img src="images/Eagle.jpg" alt="Eagle" style="width:30%">
  </div>
</div>

</section>
 </div>
 <section class="education">

<h1 class="heading"> <span>Comment</span></h1>

<div class="box-container">

    <div class="box">
        <i class="fas fa-cat"></i>
        <span>Pete</span>
        <p style="font-size:20px">กางเกงในใช้ดีจริงครับ ใช้แล้วรู้สึกเหมือนเป็นดาราจริงๆครับ </p>
    </div>

    <div class="box">
        <i class="fas fa-cat"></i>
        <span>Owen</span>
        <p style="font-size:20px">ใส่ง่าย ยืดหยุ่น ไม่คับ เหมาะสำหรับคนที่ต้องใส่กางเกงในทุกวัน</p>
    </div>

    <div class="box">
        <i class="fas fa-cat"></i>
        <span>P</span>
        <p style="font-size:20px">ใส่ไปทะเลแล้วคนมาขอถ่ายรูปด้วยเยอะมากเลยครับ รู้สึกมั่นใจขึ้นเยอะเลย
        </p>
    </div>

    <div class="box">
        <i class="fas fa-cat"></i>
        <span>Dome</span>
        <p style="font-size:20px">ใส่สบายมาก รู้สึกเหมือนไม่ได้ใส่ เพราะหมาคาบไปทิ้ง</p>
    </div>

    <div class="box">
        <i class="fas fa-cat"></i>
        <span>Pleum</span>
        <p style="font-size:20px">กลิ่นหอมตั้งแต่ซื้อมาใส่แล้วรู้สึกเหมือนหอมไข่มากเลยครับ</p>
    </div>

    <div class="box">
        <i class="fas fa-cat"></i>
        <span>Bom</span>
        <p style="font-size:20px">ซื้อลายหมาป่ามาใส่แล้วแฟนชมว่าเท่มากเลยครับ สีสวย รสนิยมดีสุดๆ</p>
    </div>

</div>

</section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style>

</style>