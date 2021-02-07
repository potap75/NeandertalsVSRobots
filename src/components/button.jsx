import React from "react";
import "../styles.css";

export default function Button() {
  return (
    <div class="form-check">
      <input 
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1"></label>
    </div>
  );
}
