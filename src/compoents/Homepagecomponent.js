import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.component.css";
import one from "../assets/gov/img/gov2.jpg";
import two from "../assets/gov/img/gov_schme.png";

import img1 from "../assets/gov/img/ladli-behna-yojana.png";

import pmkisan from "../assets/gov/img/pm_kisan.png";
import ayushmanbharat from "../assets/gov/img/Ayushman Bharat.png";
import ujuwala from "../assets/gov/img/PM Ujjwala Yojana.png";

import { Navbar } from "./Navbar";
import HomePage from "./HomePage";

function Homepagecomponent() {
  return (
    <>
      <Navbar />

      <HomePage></HomePage>
      <div class="main">
        {/** <!------------------------------Cards--------------------------------> */}
        <div class="card-group mt-3 col-md-12">
          <div class="card ">
            <div d-flex flex-row junstify-content-center>
              <img src={img1} />
            </div>

            <div class="card-body">
              <p class="card-text ">
                Ladli Behna Yojana की मध्‍य प्रदेश सरकार द्वारा 28 जनवरी 2023 को
                आरम्‍भ की गई थी। इसका उद्येश्‍य महिलाओं के स्वास्थ्य एवं पोषण
                तथा आर्थिक स्वावलम्बन को बढाना है। इस योजना के तहत मध्‍य प्रदेश
                राज्‍य की महिलाओं को 1000 रूपये प्रतिमाह प्रदान किये जाएंगे।
              </p>
            </div>
          </div>

          <div class="card ">
            <div d-flex flex-row junstify-content-center>
              <img src={pmkisan} />
            </div>

            <div class="card-body">
              <p class="card-text ">
                प्रधानमंत्री किसान सन्मान निधी योजना ही शेतकऱ्यांना आर्थिक मदत
                देण्यासाठी भारत सरकारची विशेष योजना आहे. यासाठी पूर्णपणे भारत
                सरकारकडून निधी दिला जातो. या योजनेअंतर्गत सर्व भू-धारक शेतकरी
                कुटुंबांना तीन समान हप्त्यांमध्ये वार्षिक ६००० रुपयांचं सहाय्य
                दिलं जातं.
              </p>
            </div>
          </div>
        </div>

        <div class="card-group mt-3 col-md-12">
          <div class="card ">
            <div d-flex flex-row junstify-content-center>
              <img src={ayushmanbharat} />
            </div>

            <div class="card-body">
              <p class="card-text ">
                एकत्रित आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना व महात्मा
                ज्योतिराव फुले जन आरोग्य योजना अंतर्गत प्रति वर्ष प्रती कुटुंब
                पाच लाख रुपया पर्यंतचे मोफत उपचार महाराष्ट्र व देशातील इतर
                राज्यामध्ये योजनेशी संलग्नित सरकारी किंवा खाजगी रुग्णालयात केले
                जातात.
              </p>
            </div>
          </div>

          <div class="card ">
            <div d-flex flex-row junstify-content-center>
              <img src={ujuwala} />
            </div>

            <div class="card-body">
              <p class="card-text ">
                या योजनेअंतर्गत पात्र कुटुंबांना एका वर्षात १२ गॅस सिलेंडरचा लाभ
                घेता येणार आहे. म्हणजेच बाराशे गॅस सिलेंडर तुम्हाला साडेचारशे
                रुपये प्रति सिलेंडर या किमतीत मिळणार आहे. प्रधानमंत्री उज्ज्वला
                योजना Pradhanmantri Ujjwala Yojana गरीब कुटुंबातील महिलांना मोफत
                गॅस कनेक्शन देऊन स्वस्तात गॅस सिलेंडर उपलब्ध करून देत आहे.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepagecomponent;
