<template>
    <Navbar />
    <section class="about">
        <h1 class="heading"> Underware <span> ORDER</span> </h1>
        <a-table :columns="columns" :data-source="data" :rowKey="(record) => record.id ">
            <template #picture="{ record }">
                <img :src="getFoodImg(record.foodId)" style="height: 100px;"/>
            </template>
            <template #action="{ record }">
                <a href="javascript:void(0)" @click="showModal(record.id)">แก้ไข</a>
                <a-divider type="vertical" />
                <a href="javascript:void(0)" @click="showConfirmDelete(record.id)">ลบ</a>
            </template>
        </a-table>
        <a-button type="primary" @click="showModal">สั่งออเดอร์</a-button>
    </section>

    <a-modal v-model:visible="modalVisible"  width="750px" title="เพิ่ม/แก้ไข การสั่งซื้อ" @ok="handleOk" okText="บันทึก"
    
        cancelText="ยกเลิก">
        <a-row>
            <a-col :span="6"><label>Order and Service</label></a-col>
            <a-col :span="18">
                <a-select v-model:value="book.foodId" style="width: 200px" :options="foods"></a-select>
            </a-col>
        </a-row>
        <br />
        <br />
        <a-row>
            <a-col :span="6"><label>Size</label></a-col>
            <a-col :span="18">
                <a-select v-model:value="book.sizeId" style="width: 200px" :options="sizes"></a-select>
            </a-col>
        </a-row>
        <br />
          <a-row>
                      <a-col :span="12">รูปภาพ</a-col>
                      <img :src="getFoodImg(book.foodId)" style="height: 100px;"/>

          </a-row>
        <br />
        <a-row>
            <a-col :span="6"> <label>จำนวน/ชิ้น</label>
            </a-col>
            <a-col :span="18">
                <a-input-number v-model:value="book.price" :min="1" :max="50" />
            </a-col>
        </a-row>
    </a-modal>

</template>


<script>
import Navbar from "../components/Navbar.vue";
import axios from 'axios'
import { Modal } from 'ant-design-vue';
const columns = [
    {
        title: "No",
        dataIndex: "id",
        key: "id",
        width: 65,
    },
    {
        title: "รายการกางเกงในที่สั่ง",
        dataIndex: "name",
        key: "name",
    },    {
        title: "รายการกางเกงในที่สั่ง",
        slots: { customRender: "picture" },
        key: "picture",
    },
    {
        title: "จำนวน",
        dataIndex: "price",
        key: "price",
        align: 'right'
    },
    {
        title: "แก้ไขการสั่งซื้อ",
        slots: { customRender: "action" },
        key: "id",
        align: 'center',
        width: 150,
    },
];
export default {
    components: { Navbar },
    methods: {
        async getBooks() {
            try {
                let res = await axios.get("http://localhost:3000/books")
                this.data = res.data
                
            } catch (error) { }
        },async getfoods() {
            try {
                let res = await axios.get("http://localhost:3000/foods")
                this.foods = res.data.map(x => { return { value: x.id, label: x.name }})
                this.rawFoods = res.data
            } catch (error) { }
        },
        getFoodImg(id) {
            return this.rawFoods.find(x => x.id == id)?.picture
        },
        showModal(id) {
            let book = this.data.find(x => x.id == id)
            if (book) {
                this.book = { ...book }
            } else {
                this.book = {
                    id: null,
                    foodId: null,
                    price: 0,
                    
                }
            }

            this.modalVisible = true
        },
        async handleOk() {
            try {
                let res = this.book.id ? await axios.put("http://localhost:3000/books/" + this.book.id, this.book) : await axios.post("http://localhost:3000/books", this.book)
                if (res)
                    this.modalVisible = false
            } catch (error) { } finally { this.getBooks() }
        },
        showConfirmDelete(id) {
            let book = this.data.find(x => x.id == id)
            Modal.confirm({
                title: 'ลบข้อมูล',
                content: 'คุณต้องการลบสินค้า ' + book.name + ' หรือไม่?',
                okText: 'ลบ',
                cancelText: 'ยกเลิก',
                onOk: async () => {
                    try {
                        let res = await axios.delete("http://localhost:3000/books/" + book.id)
                    } catch (error) { } finally { this.getBooks() }
                }
            });
        }
    },
    data() {
        return {
            columns: columns,
            data: [],
            modalVisible: false,
            foodId: 0,
            book: {
                id: null,
                name: null,
                price: 0,
            },
            foods: [],
            rawFoods: [],
        }
    },
    beforeMount() {
        this.getBooks()
        this.getfoods()
    }
}
</script>

<style>

</style>