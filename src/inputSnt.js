import './App.css';

function SNT() {
  return(
    <div className="wrapper">
      <h1>Số nguyên tố</h1>
      <form>
      <fieldset>
         <label>
           <p>Kiểm tra số nguyên tố</p>
           <input name="namesnt" />
         </label>
         <label>
           <p>In ra n số nguyên tố</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SNT;