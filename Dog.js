  
  function Dog(data) {
   
    Object.assign(this, data);

    this.getNewPost = function() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this;
        console.log("called")
        return `
        <section>
        <img src="${avatar}" alt="" id="dog-image">
        <div id="name" class="data">${name}, 
            <span id="age">${age}</span>
            <br> 
            <span id="bio">${bio}</span>
        </div>
        <div id="action">
            <div class="badge" id="like">like</div>
            <div class="badge" id="nope">nope</div>
        </div>
       </section>
        `;
    }

}


export default Dog