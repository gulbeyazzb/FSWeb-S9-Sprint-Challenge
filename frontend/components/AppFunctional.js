import axios from "axios";
import React, { useState } from "react";

// önerilen başlangıç stateleri
const initialMessage = "";
const initialEmail = "";
const initialSteps = 0;
const initialIndex = 4; //  "B" nin bulunduğu indexi
const coordinates = [
  "(1,1)",
  "(1,2)",
  "(1,3)",
  "(2,1)",
  "(2,2)",
  "(2,3)",
  "(3,1)",
  "(3,2)",
  "(3,3)",
];

export default function AppFunctional(props) {
  const [active, setActive] = useState(initialIndex);
  const [coordinate, setCoordinate] = useState(coordinates[initialIndex]);
  const [steps, setSteps] = useState(initialSteps);
  const [email, setEmail] = useState(initialEmail);
  const [message, setMessage] = useState(initialMessage);
  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.

  function getXY() {
    // coordinatesı izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
  }

  function getXYMesaj() {
    // Kullanıcı için "coordinates (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // coordinatesı almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.
  }

  function reset() {
    // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
    setActive(initialIndex);
    setCoordinate(coordinates[4]);
    setMessage(initialMessage);
  }

  function sonrakiIndex(yon) {
    // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
    // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
    // şu anki indeksi değiştirmemeli.
    setSteps(steps + 1);
    const { id } = yon.target;
    if (id === "right") {
      if (active === 2 || active === 5 || active === 8) {
        setMessage(`You can't go ${id}!`);
      } else {
        setActive(active + 1);
        setCoordinate(coordinates[active + 1]);
        setMessage(initialMessage);
      }
    }
    if (id === "left") {
      if (active === 0 || active === 3 || active === 6) {
        setMessage(`You can't go ${id}!`);
      } else {
        setActive(active - 1);
        setMessage(initialMessage);
        setCoordinate(coordinates[active - 1]);
      }
    }
    if (id === "down") {
      if (active === 6 || active === 7 || active === 8) {
        setMessage(`You can't go ${id}!`);
      } else {
        setActive(active + 3);
        setMessage(initialMessage);
        setCoordinate(coordinates[active + 3]);
      }
    }
    if (id === "up") {
      if (active === 0 || active === 1 || active === 2) {
        setMessage(`You can't go ${id}!`);
      } else {
        setActive(active - 3);
        setMessage(initialMessage);
        setCoordinate(coordinates[active - 3]);
      }
    }
  }

  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
    const { value } = evt.target;
    setEmail(value);
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
    evt.preventDefault();
    // axios.post("http://localhost:9000/api/result", {
    //   x: coordinate[3],
    //   y: coordinate[1],
    //   steps: steps,
    //   email: email,
    // });
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates {coordinate}</h3>
        <h3 id="steps">{steps} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div key={idx} className={`square${idx === active ? " active" : ""}`}>
            {idx === active ? "B" : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={sonrakiIndex}>
          SOL
        </button>
        <button id="up" onClick={sonrakiIndex}>
          YUKARI
        </button>
        <button id="right" onClick={sonrakiIndex}>
          SAĞ
        </button>
        <button id="down" onClick={sonrakiIndex}>
          AŞAĞI
        </button>
        <button id="reset" onClick={reset}>
          reset
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input
          id="email"
          type="email"
          placeholder="email girin"
          onChange={onChange}
        ></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
