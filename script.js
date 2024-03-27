const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


//username,password
    function func(){
        var email = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if(email == 'user1' && password == '12345')
        {
            window.location.assign("home.html")
        }
        if
          (email == 'user2' && password == '54321')
        {
            window.location.assign("home.html")
        }
        else{
            alert("Wrong username or password")
        }
    }
//homepage

    
    const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


    toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
    })

    searchBtn.addEventListener("click" , () =>{
        sidebar.classList.remove("close");
    })

    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
            
        }
    });
//bin_details

    document.addEventListener("DOMContentLoaded", function() {
        const urlParams = new URLSearchParams(window.location.search);
        const bin = urlParams.get('bin');

        if (bin) {
            const targetElement = document.getElementById(bin);
            if (targetElement) {
                targetElement.style.display = "block";
            }
        }
    });
//notications
    document.addEventListener("DOMContentLoaded", function() {
        const binList = document.getElementById('bin-list');

        const binItems = [
            {
                id: "bin1",
                location: "Oak Dale",
                percentage: 60,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5159.253534382846!2d76.94266398248692!3d8.549630030050723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b9143d09205d%3A0x443d373474e6f3b5!2sOak%20Dale!5e0!3m2!1sen!2sin!4v1711371439688!5m2!1sen!2sin"
            },
            {
                id: "bin2",
                location: "Chekkalamukku",
                percentage: 0,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.436908559155!2d76.91593782449468!3d8.553916946245694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05beccdc7f996f%3A0xb5faf149d9ad5cf7!2sChekkalamukku%2C%20Thiruvananthapuram%2C%20Kerala%20695017!5e0!3m2!1sen!2sin!4v1711374159079!5m2!1sen!2sin"
            },
            {
                id: "bin3",
                location: "DD Tech Valley",
                percentage: 20,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7891.09601494173!2d76.88785453928372!3d8.543183925830837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf648795c457%3A0x64596bb3f621d61c!2sDD%20Tech%20Valley!5e0!3m2!1sen!2sin!4v1711374516656!5m2!1sen!2sin"
            },
            {
                id: "bin4",
                location: "Kinfra",
                percentage: 55,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7890.773724909885!2d76.85454413928429!3d8.558747425337431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be4effffffff%3A0x256bb94457719793!2sKinfra%20International%20Apparel%20Parks%20Ltd!5e0!3m2!1sen!2sin!4v1711374617031!5m2!1sen!2sin"
            },
            {
                id: "bin5",
                location: "Liebe Gottes",
                percentage: 79,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8384043350748!2d76.84490530197638!3d8.569405607229124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf87a39f4031%3A0x4f1bb08a886f7de7!2sLiebe%20gottes!5e0!3m2!1sen!2sin!4v1711374798977!5m2!1sen!2sin"
            },
            {
                id: "bin6",
                location: "Padinjattumukku",
                percentage: 34,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6634.921888811323!2d76.84731727300135!3d8.57797679663408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bfc7380df913%3A0xefd5c732799974de!2sPadinjattumukku%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1711376871341!5m2!1sen!2sin"
            },
            {
                id: "bin7",
                location: "Khel",
                percentage: 6,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8457.345492130511!2d76.86441640186794!3d8.568633727286844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf499856fb9d%3A0x36c5cb2e1186c61b!2sKhel%20Academy!5e0!3m2!1sen!2sin!4v1711377126172!5m2!1sen!2sin"
            },
            {
                id: "bin8",
                location: "Posh Wedding rental Trivandrum",
                percentage: 61,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15785.762123655459!2d76.99085518971371!3d8.456468589880759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb68262d8d59%3A0xd00dca984b541784!2sPosh%20Wedding%20Rental%20Trivandrum!5e0!3m2!1sen!2sin!4v1711377650541!5m2!1sen!2sin"
            },
            {
                id: "bin9",
                location: "Sree Chitra Thirunal College of Engineering",
                percentage: 42,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8053.825713315865!2d76.9752339713165!3d8.471910171189759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05baee56e6b99b%3A0x4ce024c88eb0ddcb!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1711377806601!5m2!1sen!2sin"
            },
            {
                id: "bin10",
                location: "Vasudevam Premium Suites",
                percentage: 98,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13988.785096114329!2d76.96856893203793!3d8.467658821805404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05badd814a8299%3A0xb1a673c0d753e029!2sVasudevam%20Premium%20Suites!5e0!3m2!1sen!2sin!4v1711377972298!5m2!1sen!2sin"
            },
            {
                id: "bin11",
                location: "Anu S P",
                percentage: 57,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12870.217300886288!2d76.97123134567173!3d8.445382123128068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0008e04f09%3A0xe3fb0a78415a5af9!2sAnu%20S%20P!5e0!3m2!1sen!2sin!4v1711378038007!5m2!1sen!2sin"
            },
            {
                id: "bin12",
                location: "Thanal",
                percentage: 91,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.7541437807618!2d76.98747008455841!3d8.4518237256305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb43c98932d%3A0xb4ea4ff61537b68a!2z4LSk4LSj4LW9IChUSEFOQUwp!5e0!3m2!1sen!2sin!4v1711378062591!5m2!1sen!2sin"
            },    
            {
                id: "bin13",
                location: "X Road",
                percentage: 47,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5202.225915420496!2d76.84428650918969!3d8.585163531049082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf80fafa90e1%3A0xa66dad40d29e1cf!2sJawa%20Cottage%20Jn!5e0!3m2!1sen!2sin!4v1711377460737!5m2!1sen!2sin"
            },      
            {
                id: "bin14",
                location: "Kaniyapuram",
                percentage: 6,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.115427443551!2d76.84819227449492!3d8.584899495783574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bfbfb8f31c67%3A0x90c516fd37294698!2sThiruvananthapuram%2C%20Kaniyapuram%2C%20Kerala%20695301!5e0!3m2!1sen!2sin!4v1711377396192!5m2!1sen!2sin"
            },
            {
                id: "bin15",
                location: "Kazhakuttam",
                percentage: 80,
                mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13944.637090953269!2d76.8643120087671!3d8.562845623395972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bef879d8164f%3A0x6dffefba165c07cc!2sKazhakuttam!5e0!3m2!1sen!2sin!4v1711377325365!5m2!1sen!2sin"
            }
        ];

        binItems.forEach(item => {
            if (item.percentage >= 80) {
                const listItem = document.createElement('li');
                listItem.classList.add('col-lg-12', 'binId');
                listItem.id = item.id;

                listItem.innerHTML = `
                    <div type="button" class="collapse_btn">Bin Id : ${item.id.slice(3)}</div>
                    <div class="location"><i class="bx bx-current-location"></i> ${item.location}</div>
                    <div class="number">Percentage : <span class="number">${item.percentage}%</span></div>
                    <div class="map">
                        <iframe src="${item.mapSrc}" width="100%" min-height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                `;
                binList.appendChild(listItem);
            }
        });
    });
