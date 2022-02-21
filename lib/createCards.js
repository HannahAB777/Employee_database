
function renderInternCard({name, id, email, school }) {
    return `<div class = "col-3"><div class="card" style="width: 18rem;">
<div class="card-header" id= "title">
  Intern: ${name}
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee ID: ${id}</li>
  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
  <li class="list-group-item">School: ${school}</li>
</ul>
</div>
</div>`;

}

function renderManagerCard({name, id, email, officeNumber }) {
    return `<div class = "col-3" ><div class="card" style="width: 18rem;">
<div class="card-header" id= "title">
Manager: ${name}
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee ID: ${id}</li>
  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
  <li class="list-group-item">Office Number: ${officeNumber}</li>
</ul>
</div>
</div>`;

}

function renderEngineerCard({name, id, email, github }) {
    return `<div class = "col-3"><div class="card" style="width: 18rem;">
<div class="card-header" id= "title">
Engineer: ${name}
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee ID: ${id}</li>
  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
  <li class="list-group-item">Github: <a>${github}</a></li>
</ul>
</div>
</div>`;

}

module.exports = (renderInternCard, renderEngineerCard, renderManagerCard);