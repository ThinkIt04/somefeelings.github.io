      const scriptURL = 'https://script.google.com/macros/s/AKfycbx2KV-EZUTPe-WbxMSqg1O1H22TcizcjBW3MauczuSQazfKU3aG/exec';
      const form = document.forms['google-sheet'];
      const alt = document.getElementById("t-alert");
      const eralt = document.getElementById("e-alert");
      
      const myurl = "https://thinkit04.github.io/somefeelings.github.io/";
      const mytext = " ______________         There_are_some_so_beautiful_poems...";
      document.getElementById("share").innerHTML = `<a href="whatsapp://send?text=${myurl + mytext}" data-action="share/whatsapp/share" target="_blank" class="fa fa-whatsapp"><a href="https://t.me/share/url?url=https://thinkit04.github.io/somefeelings.github.io/&amp;text=There are some so beautiful poems..." class="fa fa-telegram"></a><a href="http://www.facebook.com/sharer.php?u=https://thinkit04.github.io/somefeelings.github.io/&t=There_are_some_so_beautiful_poems..." class="fa fa-facebook"></a><a class="twitter-share-button fa fa-twitter" href="https://twitter.com/intent/tweet?text=There_are_some_so_beautiful_poems...&url=https://thinkit04.github.io/somefeelings.github.io/"></a>`;
      document.getElementById("share1").innerHTML = `<a href="whatsapp://send?text=${myurl + mytext}" data-action="share/whatsapp/share" target="_blank" class="fa fa-whatsapp"><a href="https://t.me/share/url?url=https://thinkit04.github.io/somefeelings.github.io/&amp;text=There are some so beautiful poems..." class="fa fa-telegram"></a><a href="http://www.facebook.com/sharer.php?u=https://thinkit04.github.io/somefeelings.github.io/&t=There_are_some_so_beautiful_poems..." class="fa fa-facebook"></a><a class="twitter-share-button fa fa-twitter" href="https://twitter.com/intent/tweet?text=There_are_some_so_beautiful_poems...&url=https://thinkit04.github.io/somefeelings.github.io/"></a>`;

      function change(){
        if (document.getElementById('chang').checked==true){
          document.getElementById('checked').innerHTML = ``;
        }
        else{
          document.getElementById('checked').innerHTML = `<div class="inputBox"><label for="n5"><i class="far fa-envelope"></i> E-mail ID</label><br><input id="n5" class="enter-1" type="email" name="E-mail IDs" id="E-mail IDs" required></div><div class="inputBox"><label for="n6"><i class="fas fa-link"></i> Your File URL</label><br><input id="n6" class="enter-1" type="url" name="File URLs" id="File URLs" required></div>`;
        }
      }
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {alt.style.display = "block";})
          .catch(error => {eralt.style.display = "block";})
      })

      function al(){
        document.getElementById("loading").style.display = "none";
        document.getElementById("top").style.display = "block";
        document.getElementById("m-alert").style.display = "block";
      }

      function malt(){
        document.getElementById("m-alert").style.display = "none";
      };
      function talt(){
        document.getElementById("t-alert").style.display = "none";
      };
      function ealt(){
        document.getElementById("e-alert").style.display = "none";
      };
      function calt(){
        document.getElementById("c-alert").style.display = "none";
      };
      function galt(){
        document.getElementById("g-alert").style.display = "none";
      };

      const quotes = document.getElementById("quotes");
      const author = document.getElementById("author");
      const quors = document.getElementById("quor");
      const ref = document.getElementById("refresh");
      let realData = " ";


      const getNewQuotes = () => {
        let rnum = Math.floor(Math.random() * 10);
        quotes.innerText = `${realData[rnum].text}...`;
        author.innerText = `- ${realData[rnum].author}`;
        quors.innerHTML = `${realData[rnum].text}...         _____________${realData[rnum].author}   _________________   https://thinkit04.github.io/somefeelings.github.io/#quotes  _______________   Please_visit,_response_&_share...`;
      };
      const getQuotes = async () => {
        const api = "https://type.fit/api/quotes";
        try {
          let data = await fetch(api);
          realData = await data.json();
          getNewQuotes();
        } catch (error) {}
      };

      ref.addEventListener("click", getNewQuotes);
      
      getQuotes();

      const p1 = document.getElementById("po1");
      const p2 = document.getElementById("po2");
      const p3 = document.getElementById("po3");
      const p4 = document.getElementById("po4");
      const p5 = document.getElementById("po5");
      const p6 = document.getElementById("po6");
      const v1 = document.getElementById("bar");
      const v2 = document.getElementById("home");
      const v3 = document.getElementById("gallery");
      const v4 = document.getElementById("contact_us");
      const v5 = document.getElementById("footer");
      const v6 = document.getElementById("top");
      const da = document.getElementById("dark");
      function hide1(){
        p1.style.display = "block";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "none";
        p5.style.display = "none";
        p6.style.display = "none";
        v1.style.display = "none";
        v2.style.display = "none";
        v3.style.display = "none";
        v4.style.display = "none";
        v5.style.display = "none";
        v6.style.display = "none";
        da.classList.add("switch");
      };
      function hide2(){
        p1.style.display = "none";
        p2.style.display = "block";
        p3.style.display = "none";
        p4.style.display = "none";
        p5.style.display = "none";
        p6.style.display = "none";
        v1.style.display = "none";
        v2.style.display = "none";
        v3.style.display = "none";
        v4.style.display = "none";
        v5.style.display = "none";
        v6.style.display = "none";
        da.classList.add("switch");
      };
      function hide3(){
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "block";
        p4.style.display = "none";
        p5.style.display = "none";
        p6.style.display = "none";
        v1.style.display = "none";
        v2.style.display = "none";
        v3.style.display = "none";
        v4.style.display = "none";
        v5.style.display = "none";
        v6.style.display = "none";
        da.classList.add("switch");
      };
      function hide4(){
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "block";
        p5.style.display = "none";
        p6.style.display = "none";
        v1.style.display = "none";
        v2.style.display = "none";
        v3.style.display = "none";
        v4.style.display = "none";
        v5.style.display = "none";
        v6.style.display = "none";
        da.classList.add("switch");
      };
      function hide5(){
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "none";
        p5.style.display = "block";
        p6.style.display = "none";
        v1.style.display = "none";
        v2.style.display = "none";
        v3.style.display = "none";
        v4.style.display = "none";
        v5.style.display = "none";
        v6.style.display = "none";
        da.classList.add("switch");
      };
      function hide6(){
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "none";
        p5.style.display = "none";
        p6.style.display = "block";
        v1.style.display = "none";
        v2.style.display = "none";
        v3.style.display = "none";
        v4.style.display = "none";
        v5.style.display = "none";
        v6.style.display = "none";
        da.classList.add("switch");
      };

      function cut(){
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "none";
        p5.style.display = "none";
        p6.style.display = "none";
        v1.style.display = "block";
        v2.style.display = "block";
        v3.style.display = "block";
        v4.style.display = "block";
        v5.style.display = "block";
        v6.style.display = "block";
        da.classList.remove("switch");
      };
      
      function copyToClipboard() {
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById("quor").innerText);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        document.getElementById("c-alert").style.display = "block";
      }

      const hi1 = document.getElementById("h1");
      hi1.innerHTML = 'बाहर आती हो तुम , जगमगाता हूँ मैं । <br>  चलती हैं हवाएँ , लहराता हूँ मैं । <br>  आती हैं कलियाँ , मुस्कराता हूँ मैं । <br>  खिलती हैं कलियाँ , खिलखिलाता हूँ मैं । <br>  मुरझाती हो तुम , मुरझा जाता हूँ मैं । <br>  गिरती हो तुम , गिड़गिड़ाता हूँ मैं । <br>  जिंदिगी की तुमहारी , फल पाता हूँ मैं । <br>  अन्नदाता हो तुम , बस जरिया हूँ मैं । <br>देखभाल तुम्हारी , के लिए जाना जाता हूँ मैं । <br>तुम्हारी ही वजह से , किसान कहलाता हूँ मैं । <br>किसान कहलाता हूँ मैं ॥ ';
      const hi2 = document.getElementById("h2");
      hi2.innerHTML = 'आ जाने से तुम्हारे आ जाने से तुम्हारे , <br>दरवाजा दिल का खुल जाता है । <br>सुंदरता देख तुम्हारी , वह चंद भी समर्मात जाता है । <br>हवाओं से तुम्हारी , मैन भी सीतल हो जाता है । <br>प्रभावित होकर तुमसे पंछी भी आ जाती है । <br>राग में वे तुम्हारी , वह भी गीत खुसी की गातीं हैं । <br>आ जाने से तुम्हारे , जीवन परिवर्तित हो जाता है । <br>लहराने से तुम हरे हर पौधा लहराना है । <br>रिमझिम बारिश एक से तुम्हारी , यह जग धूल जाता है । <br>देख कर एक बार तुम्हें , इंसान सारे दूख भूल जाता है । <br>सिर्फ एक झलक से तुम्हारी , सब तुममे ही रम जाते हैं । <br>आ जाने से तुम्हारे , हर प्यासा बुझ जाता है । <br>दिन बिताये संत तुम्हारे , एक रिश्ता अब बन जाता है । <br>बात चले जाने की तुम्हारी , हर दिल को सताती है । <br>आशा होती है सबमे लिए तुम्हारी हर दिन एक दिन बीत जाता है । <br>न गलत साबित करना तुम , इससे दिल टूट जाता है । <br>इससे दिल टूट जाता है ।।';
      const hi3 = document.getElementById("h3");
      hi3.innerHTML = 'क्या होती है यह दोस्ती,<br>जिंदगी की सबसे यादकर पल होती है दोस्ती । <br>जिंदगी की एक अच्छी सलाह होती है दोस्ती । <br>जिंदगी भर हमारे लिए सोचती है दोस्ती । <br>बातों को संभाल कर रखती है दोस्ती । <br>भूलना मत इसे दुखती है यह दोस्ती । <br>क्या होती है यह दोस्ती,<br>जिंदगी की परवाह करती नही दोस्ती । <br>जिंदगी के पैसों से मतलब रखती नही दोस्ती । <br>हमारे लिए भला ही करती है दोस्ती । <br>जिंदगी को हमारी समझती है दोस्ती । <br>भूलना मत इसे दुखती है यह दोस्ती । <br>भूलना मत इसे दुखती है यह दोस्ती ।। ';
      const hi4 = document.getElementById("h4");
      hi4.innerHTML = 'करता है सलाम यह जहान आपकी हिम्मत को , <br>आप बचा रहें है हमे , <br>खतरे में डालकर अपनी जान को , <br>हम दाद देते हैं इस इंतकाम की घड़ी में आपकी मेहनत को , <br>इसलिए धन्यवाद करते हैं हम , <br>आपकी मेहनत को और आपको ।। ';

      const toggle = document.getElementById('toggle');
      const body = document.body;

      toggle.addEventListener('input', (e) => {
        const isChecked = e.target.checked;
        
        if(isChecked) {
          body.classList.add('dark-theme');
        } else {
          body.classList.remove('dark-theme');
        }
      });