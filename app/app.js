var homeContent = `<div class="hero"></div>

<div class="content">
    <div class="heroimg"></div>
    <h1>NOW SHOWING:</h1>
    <div class="products">
        <div class="product">
            <div class="prod-image"></div>
            <div class="prod-desc">
                <h3>Breathless (1960)</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad accusantium vero, voluptates dolore rem iusto culpa! Eveniet corrupti dolore doloribus porro distinctio at nulla nesciunt iusto quae eaque. Aspernatur iste quisquam mollitia minima explicabo earum, delectus veritatis, reiciendis aperiam quo magnam distinctio beatae, nobis cupiditate iusto sed optio maiores eius.</p>
                <h3>SHOWTIMES:</h3>
                <div class="btn-showTime">12:00pm</div>
                <div class="btn-showTime">3:30pm</div>
                <div class="btn-showTime">5:45pm</div>
                <div class="btn-showTime">7:30pm</div>
                
        </div>
            </div>
            <div class="product">
                <div class="prod-image-two"></div>
                <div class="prod-desc">
                    <h4>Mon Oncle (1958)</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad accusantium vero, voluptates dolore rem iusto culpa! Eveniet corrupti dolore doloribus porro distinctio at nulla nesciunt iusto quae eaque. Aspernatur iste quisquam mollitia minima explicabo earum, delectus veritatis, reiciendis aperiam quo magnam distinctio beatae, nobis cupiditate iusto sed optio maiores eius.</p>
                    <h4>SHOWTIMES:</h4>
                    <div class="btn-showTime">12:00pm</div>
                    <div class="btn-showTime">3:30pm</div>
                    <div class="btn-showTime">5:45pm</div>
                    <div class="btn-showTime">7:30pm</div>
                    
            </div>
            </div>
            <div class="product">
                <div class="prod-image-three"></div>
                <div class="prod-desc">
                    <h4>The 400 Blows (1959)</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad accusantium vero, voluptates dolore rem iusto culpa! Eveniet corrupti dolore doloribus porro distinctio at nulla nesciunt iusto quae eaque. Aspernatur iste quisquam mollitia minima explicabo earum, delectus veritatis, reiciendis aperiam quo magnam distinctio beatae, nobis cupiditate iusto sed optio maiores eius.</p>
                    <h4>SHOWTIMES:</h4>
                    <div class="btn-showTime">12:00pm</div>
                    <div class="btn-showTime">3:30pm</div>
                    <div class="btn-showTime">5:45pm</div>
                    <div class="btn-showTime">7:30pm</div>
                    
            </div>
            </div>
            
        
    </div>
</div>`;

var aboutContent = ` <div class="content-about">
<div class="heroimg"></div>
<h1>LOREM IPSUM THEATER:</h1>
<div class="products">
    <div class="product">
        <div class="prod-image"></div>
        <div class="prod-desc">
            <h4>ABOUT:</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad accusantium vero, voluptates dolore rem iusto culpa! Eveniet corrupti dolore doloribus porro distinctio at nulla nesciunt iusto quae eaque. Aspernatur iste quisquam mollitia minima explicabo earum, delectus veritatis, reiciendis aperiam quo magnam distinctio beatae, nobis cupiditate iusto sed optio maiores eius.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad accusantium vero, voluptates dolore rem iusto culpa! Eveniet corrupti dolore doloribus porro distinctio at nulla nesciunt iusto quae eaque. Aspernatur iste quisquam mollitia minima explicabo earum, delectus veritatis, reiciendis aperiam quo magnam distinctio beatae, nobis cupiditate iusto sed optio maiores eius.</p>
        </div>
    </div>
    <div class="fnw-text">
        <h3>FRENCH NEW WAVE DIRECTORS</h3>
    </div>
    <div class="fnw-images">
        <div class="fnw-image-one">
            <div class="img-text">Jean-Luc Godard</div>
        </div>
        <div class="fnw-image-two">
            <div class="img-text">Claude Chabrol</div>
        </div>
        <div class="fnw-image-three">
            <div class="img-text">François Truffaut</div>
        </div>
    </div>
</div>
</div> `

var shopContent = ` <div class="content-shop">
<div class="heroimg"></div>
<h1>SHOP THE COLLECTION:</h1>
<div class="products">
    <div class="product">
        <div class="fnw-images-one">
            <div class="fnw-image-one">
                <div class="btnBuy">Buy Now</div>
            </div>
            <div class="fnw-image-two">
                <div class="btnBuy">Buy Now</div>
            </div>
            <div class="fnw-image-three">
                <div class="btnBuy">Buy Now</div>
            </div>
        </div>
        <div class="fnw-images-two">
            <div class="fnw-image-one">
                <div class="btnBuy">Buy Now</div>
            </div>
            <div class="fnw-image-two">
                <div class="btnBuy">Buy Now</div>
            </div>
            <div class="fnw-image-three">
                <div class="btnBuy">Buy Now</div>
            </div>
        </div>
        <div class="fnw-images-three">
            <div class="fnw-image-one">
                <div class="btnBuy">Buy Now</div>
            </div>
            <div class="fnw-image-two">
                <div class="btnBuy">Buy Now</div>
            </div>
            <div class="fnw-image-three">
                <div class="btnBuy">Buy Now</div>
            </div>
        </div>
    </div>
</div>
</div>`

var contactContent = ` <div class="content-contact">
<div class="heroimg"></div>
<h1>CONTACT US:</h1>
<div class="products">
    <div class="product-form">
        <div class="form-text-input">
            <input type="text" placeholder="Your name..." />
        </div>
        <div class="form-text-input">
            <input type="text" placeholder="Your Email..." />
        </div>
        <div class="form-text-message-input">
            <input type="text" placeholder="Message..." />
        </div>
        <div class="btn-message">SEND MESSAGE</div>
    </div>
    </div> 
</div>  `

function initListeners() {
    $("nav a").click(function (e) {
        let btnId = e.currentTarget.id;
        loadPageContent(btnId);
        
        // console.log("click " + contentId);
    });
}

function loadPageContent(pageName) {
    let contentId = pageName + "Content";
    $("#app").html(eval(contentId));
}

function initApp() {
  loadPageContent("home");
    initListeners();
}



// this function gets called first
$(document).ready(function (){
    initApp();
});