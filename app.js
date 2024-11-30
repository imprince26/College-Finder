let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#Search");
let clear = document.querySelector("#clear");
let list = document.querySelector("#list");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let colArr = await getColleges(country);
  show(colArr);
});
clear.addEventListener("click", () => {
  reset();
});
function reset() {
  list.innerText = "";
}
function show(colArr) {
  list.innerText = "";
  for (col of colArr) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}
async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("error :", e);
    return [];
  }
}
