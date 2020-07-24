'use strict'
Vue.component("overview" , {
    components:{

    },
    props:{

    },
    data(){return{
        name: "Restaurant name here",
        offer: "offer value here",
        inImageTab: false,
        costForTwo: 700,
        whichImage:0,
        menu_image:["https://b.zmtcdn.com/data/menus/995/312995/762c598d5b4906728c37c32acbb644bd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/collections/ecec46ffb5bc20bebe0857c47f630fc5_1535354925.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/18363082/0b157d9edcbc932632582f9b91fa6936_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/18349892/c2033a3d75f4c54fad6b35410f583e5b_featured_v2.jpg"
        ],
        cuisines:[
            "Biryani" , 
            "Mughlai" ,
            "Kebab",
            "Hyderabadi"
        ],
        topDishOrder:[
            "Phirni", 
            "Veg Hyderabadi Biryani",
            "Galauti Kebab",
            "Nawabi Paneer",
            "Burani Raita",
            "Mutton Pepper Fry", 
            "Rumali Roti",
        ],
        more_info:[
            "Home Delivery",
            "Indoor Seating"
        ],
        address:"dekhna padega",
        

        }
    },
    computed:{

    },
    methods:{
        updateWhichImage(val){
            this.whichImage= ((+this.whichImage) + val + this.menu_image.length)%this.menu_image.length;
            console.log(this.whichImage);
        }

    },
    template:`
    <div class="overviewForMain">
    <div class="check" v-show="!inImageTab">
        <section class = "overview_left">
            <div class="zomato_gold">
                <div class="zomato_gold_offer">
                    <p>GET {{offer}}% OFF</p>
                </div>
                <p>Become a Zomato Gold member and enjoy {{ offer }} Off every time at {{name}}. Know more.</p>
                <P style="color:red;">Know more<p>
            </div>
            
            <div class="about_place">
                <h1>About this place</h1>    
                <div class="a_p_content">
                    <section class="about_place_con" v-for="x in [0 , 0 , 0]">
                        <img src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png"
                        style = "width:3rem; height:3rem;">
                        <section>
                            <p  class="about_place_p_con1">RESTAURANT SAFETY MEASURE</p>
                            <p  class="about_place_p_con2">Well Sanitized Kitchen</p>
                        </section>
                    </section>
                </div>
                
            </div>
    
            <div class="overviewMenu" @click="inImageTab = 1">
                <h2> Menu </h2>
                <img src="https://b.zmtcdn.com/data/menus/995/312995/762c598d5b4906728c37c32acbb644bd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A">
                <h2 style="margin:0rem;">Food Menu</h2>
                <p style="margin:0rem;">page n</p>
            </div>
            
            <div class="cuisines" >
                <h2>Cuisines</h2>
                <div class="cuisines_type" v-for="cuisine in cuisines">
                    <p>{{ cuisine }}</p>
                </div>
            </div>
    
            <div class="top_dish">
                <h1>Top Dishes People Order</h1>
                <p ><span v-for="dish in topDishOrder">{{dish}},</span></p>
            </div>
    
            <div class="people_liked">
                <h1>People Liked</h1>
                <p>Prompt Service, Decor</p>
            </div>
    
            <div class="cost">
                <h1>Average Cost</h1>
                <p>Rs. {{costForTwo}} for two people (approx.)<br>
    
                    Exclusive of applicable taxes and charges, if any <br>
                    
                    How do we calculate cost for two?<br>
                    
                    Cash and Cards accepted Digital payments accepted<br>
                </p>
            </div>
    
            <div>
                <h1>More Info</h1>
                <div class="more_info_item" v-for="info in more_info">
                    <p>{{info}}<p>
                </div>
            </div>
    
            <div>
                <h1>Featured In</h1>
                <img alt="Brilliant Biryanis" src="https://b.zmtcdn.com/data/collections/ecec46ffb5bc20bebe0857c47f630fc5_1535354925.jpg" class="image_biryani">
            </div>
        
        </section>
    
        
        <article class="overview_right">
            <h1>Call</h1>
            <h2>+0000000000</h2>
            <h1>Direction</h1>
            <img src="https://b.zmtcdn.com/data/menus/995/312995/762c598d5b4906728c37c32acbb644bd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A">
            <p>address of the RESTAURANT</p>
            <section class="o_r">
                <button onclick="overviewRightCopy()"><h3>Copy</h3></button>
                <h3>map</h3>
            </section>
        </article>
    </div>

    
    <div class="overview_photo" v-show="inImageTab">
        <div class="overviewSlideShow">
            <div  v-for="(image, index) in menu_image" >
                <img :src=image style="width:100%" v-show="(+whichImage)==index"  >
            </div>
            <a class="overviewPrev" @click="updateWhichImage(-1)">&#10094;</a>
            <a class="overviewNext" @click="updateWhichImage(1)">&#10095;</a>    
        </div>
        
        <div style="margin-left: 48%;">
            <button @click="inImageTab = 0" ><h3> Close </h3></button>
        </div>
    </div>
    </div> 
    `,
})

let restaurant = new Vue({
    el:'#restaurant',
})
