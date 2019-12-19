import React, { Component, Fragment } from 'react'

class NuevoCliente extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <h2 className="text-center mt-4">Nuevo Cliente</h2>
        <div className="col-md-8 m-3">
          <form className="col-md-8 m-3" >
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>
              <div className="form-group col-md-6">
                <label>Apellido</label>
                <input type="text" className="form-control" placeholder="Apellido" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Empresa</label>
                <input type="text" className="form-control" placeholder="Empresa" />
              </div>
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Edad</label>
                <input type="text" className="form-control" placeholder="Edad" />
              </div>
              <div className="form-group col-md-6">
                <label>Tipo Cliente</label>
                <select className="form-control">
                  <option value="">Elegir...</option>
                  <option value="PREMIUM">PREMIUM</option>
                  <option value="BASICO">BÁSICO</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default NuevoCliente