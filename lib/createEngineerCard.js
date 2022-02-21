function renderEngineerCard({name, id, email, github }) {
    return `<div class="card col-3" style="width: 18rem;">
<div class="card-header" id= "title">
Engineer: ${name}
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee ID: ${id}</li>
  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
  <li class="list-group-item">Github: <a href= "${github}">${github}</a></li>
</ul>
</div>`;

}

module.exports = (renderEngineerCard);