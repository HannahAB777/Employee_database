function renderHtml(employeeCards){
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Employee register</title>
        <style>
        nav{ background-color: rgb(59, 211, 216);}
        #myheader{ text-align: center; color: bisque;}
        #title{background-color: rgb(59, 211, 216); color: bisque;}
        </style>
      </head>
      <body>
        <!-- As a heading -->
    <nav class="navbar" id = "myheader">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">My Team</span>
      </div>
    </nav>
    
    <div class="row">
    
    ${employeeCards.join("")}
      
    </div>
        
    
        
    
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </body>
    </html>`
}

module.exports = (renderHtml);