function Navbar(props){
    async function search(event){
        props.onSubmit(event.target.id);
         event.preventDefault();
       }

    return(
        <div className="navbar">
          <ul>
          <li id="" onClick={search}>Home</li> 
          <li id="technology" onClick={search}>Technology</li>
          <li id="Sport" onClick={search}>Sport</li>
          <li id="Business" onClick={search}>Business</li>
          <li id="Entertainment" onClick={search}>Entertainment</li>
          <li id="Science" onClick={search}>Science</li>
          </ul>
        </div>
    );
}

export default Navbar;