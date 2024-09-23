import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="!#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="!#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="!#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="!#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
// Navbar.propTypes = { title: PropTypes.string } // This is ensure that title has a Valid String Value if not It will throw warning om console
Navbar.propTypes = { title: PropTypes.string.isRequired }
// Navbar.defaultProps = { title: "byDefult set this title" } // Bydefault set the title if we not have not pass any value for this.