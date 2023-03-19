const loadIt = async() =>{
   const url = `https://openapi.programming-hero.com/api/news/categories`;
   const response = await fetch(url);
   const data = await response.json();
   getData(data.data.news_category);
}

const getData = (data) =>{
    console.log(data);
    data.forEach(element => {
      document.getElementById('sectionContainer').innerHTML += `
      <a class="nav-link" "href="#" onclick="getItById('${element.category_id}','${element.category_name}')">${element.category_name}</a>
      `
    });
}

const getItById = async (category_id,category_name) =>{
   const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
   const response = await fetch(url);
   const data = await response.json();
   getResult(data.data,category_name);
}

const getResult = (data,category_name) =>{
  console.log(data,category_name);
  document.getElementById('numberId').innerText = data.length || "No";
  document.getElementById('categoryId').innerText = category_name;
}
loadIt();