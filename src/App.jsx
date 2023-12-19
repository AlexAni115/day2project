import React from 'react'

function App() {
  const data = [
    {tittle:"project One",
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"},
  {tittle:"project two",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."},
  {tittle:"project three",
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!"},
  {tittle:"project four",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."},
  {tittle:"project five",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."},
  {tittle:"project six",
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse."}

]
  return<>
  <div className="container">

  {/* <!-- Page Heading --> */}
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div className="row" >
    {
    data.map((e,i)=>{ 
      return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
    
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{e.tittle}</a>
          </h4>
          <p className="card-text">{e.text}</p>
        </div>
      </div>
    </div>
    })
   }
    
  </div>
  {/* <!-- /.row --> */}

  

</div>
</>
}

export default App