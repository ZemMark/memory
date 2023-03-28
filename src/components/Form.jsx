import { useState } from "react";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";

export function Form({ numbers, shownForm }) {
  const [userInput, setUserInput] = useState("");
  const [done, setDone] = useState(false);


  function checkMatch() {
    const tampResultArray = [];
    const userArray = userInput.split("").map(Number);
    for (let i = 0; i < userArray.length; i++) {
      tampResultArray.push(userArray[i] === numbers[i]);
      return userArray;
    }
  }


  function onSubmit(e) {
    e.preventDefault();

    Confirm.show(
      "Notiflix Confirm",
      "Do you agree with me?",
      "Yes",
      "No",
      () => {
        setDone(true);
      },
      () => {
        alert("If you say so...");
      },
      {}
    );
  }
  return (
    shownForm && (<form action="" onSubmit={onSubmit}>

      <input
        type="tel"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}placeholder="Напишіть те що запам'ятали"
      />
      
      <button type="submit">apply</button>
      {done && (
        <div>
          <p>Numbers: {numbers}</p>
          <p>Your answer: {userInput}</p>
        </div>
      )}
    </form>)
  );
}
