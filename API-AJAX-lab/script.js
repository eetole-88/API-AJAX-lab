fetch("https://www.reddit.com/r/aww/.json")
  .then((res) => res.json())
  .then((data) => {
    for (const image of data.data.children) {
      const sectionEl = document.createElement("section");
      sectionEl.classList.add("post");
      sectionEl.innerHTML = `
       <h2></h2>
       <div class="image div"><img class="thumbnail"></div>
       <div class="anchor div"> <a class="url">More Cuteness</a></div>`;
      const titleEl = sectionEl.querySelector("h2");
      titleEl.innerText = image.data.title;
      const imgEl = sectionEl.querySelector(".thumbnail");
      imgEl.setAttribute("src", image.data.thumbnail);
      console.log(imgEl);
      const aEl = sectionEl.querySelector(".url");
      aEl.setAttribute("href", image.data.url);
      console.log(aEl);
      const mainEl = document.querySelector("main");
      mainEl.append(sectionEl);
    }
  });
