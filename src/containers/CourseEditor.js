import React, {Component} from 'react'
import ModuleList from "../components/ModuleList";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.courseId)
    }

    render(){
        return (
            <div className="container-fluid">
                <h1>Course Editor</h1>
                <div className="row">
                    <ModuleList/>
                    <div className="col-9">
                        <div className="form-group">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active"
                                       href="#">
                                        Chapter-1
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="#">
                                        Chapter-2
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="#">
                                        Chapter-3
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="#">
                                        Chapter-4
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled"
                                       href="#">
                                        Chapter-5
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="#">
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <div className="row justify-content-start">
                                <div className="col-1">
                                    <button className="btn btn-success"
                                            type="submit"
                                            id="save">
                                        Save
                                    </button>
                                </div>

                                <div className="col-1">
                                    <button type="button"
                                            className="btn btn-info"
                                            data-toggle="button"
                                            aria-pressed="false"
                                            autocomplete="off">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid form-group">
                            <div className="row">
                                <div className="col">
                                    <h1>
                                        Heading Widget
                                    </h1>
                                </div>
                                <div className="col justify-content-end">
                                    <div className="row">
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="up1">
                                                <i className="fas fa-arrow-alt-circle-up"></i>
                                            </button>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="down1">
                                                <i className="fas fa-arrow-alt-circle-down"></i>
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <select className="form-control"
                                                    id="widget-type1">
                                                <option>Heading</option>
                                                <option>Paragraph</option>
                                                <option>List</option>
                                                <option>Image</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-danger"
                                                    type="submit"
                                                    id="delete1">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <input type="text"
                                       className="form-control"
                                       id="heading-text"
                                       placeholder="Heading Text"/>
                            </div>
                            <div className="row form-group">
                                <select className="form-control"
                                        id="heading-type">
                                    <option>Heading 1</option>
                                    <option>Heading 2</option>
                                    <option>Heading 3</option>
                                    <option>Heading 4</option>
                                </select>
                            </div>
                            <div className="row form-group">
                                <input type="text"
                                       className="form-control"
                                       id="widget-name1"
                                       placeholder="Widget Name"/>
                            </div>
                            <div className="row">
                                <h4>Preview</h4>
                            </div>
                            <div className="row">
                                <h1>Heading Text</h1>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <h1>
                                        List Widget
                                    </h1>
                                </div>
                                <div className="col justify-content-end">
                                    <div className="row">
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="up2">
                                                <i className="fas fa-arrow-alt-circle-up"></i>
                                            </button>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="down2">
                                                <i className="fas fa-arrow-alt-circle-down"></i>
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <select className="form-control"
                                                    id="widget-type2">
                                                <option>Heading</option>
                                                <option>Paragraph</option>
                                                <option>List</option>
                                                <option>Image</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-danger"
                                                    type="submit"
                                                    id="delete2">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                        <textarea className="form-control"
                                  id="list-items"
                                  rows="2"
                                  placeholder="Put each item in a separate row.">
                        </textarea>
                            </div>
                            <div className="row form-group">
                                <select className="form-control"
                                        id="list-type">
                                    <option>Unordered List</option>
                                    <option>Ordered List</option>
                                </select>
                            </div>
                            <div className="row form-group">
                                <input type="text"
                                       className="form-control"
                                       id="widget-name2"
                                       placeholder="Widget Name"/>
                            </div>
                            <div className="row">
                                <h4>Preview</h4>
                            </div>
                            <div className="row">
                                <ul>
                                    <li>Put each</li>
                                    <li>item in</li>
                                    <li>a separate row.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <h1>
                                        Paragraph Widget
                                    </h1>
                                </div>
                                <div className="col justify-content-end">
                                    <div className="row">
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="up3">
                                                <i className="fas fa-arrow-alt-circle-up"></i>
                                            </button>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="down3">
                                                <i className="fas fa-arrow-alt-circle-down"></i>
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <select className="form-control"
                                                    id="widget-type3">
                                                <option>Heading</option>
                                                <option>Paragraph</option>
                                                <option>List</option>
                                                <option>Image</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-danger"
                                                    type="submit"
                                                    id="delete3">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                            <textarea className="form-control"
                                      id="para"
                                      rows="3"
                                      placeholder="Lorem ipsum">
                            </textarea>
                            </div>
                            <div className="row form-group">
                                <input type="text"
                                       className="form-control"
                                       id="widget-name3"
                                       placeholder="Widget Name"/>
                            </div>
                            <div className="row">
                                <h4>Preview</h4>
                            </div>
                            <div className="row">
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <h1>
                                        Image Widget
                                    </h1>
                                </div>
                                <div className="col justify-content-end">
                                    <div className="row">
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="up4">
                                                <i className="fas fa-arrow-alt-circle-up"></i>
                                            </button>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-warning"
                                                    type="submit"
                                                    id="down4">
                                                <i className="fas fa-arrow-alt-circle-down"></i>
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <select className="form-control"
                                                    id="widget-type4">
                                                <option>Image</option>
                                                <option>Heading</option>
                                                <option>Paragraph</option>
                                                <option>List</option>
                                            </select>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-danger"
                                                    type="submit"
                                                    id="delete4">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <input className="form-control"
                                       id="img-source"
                                       placeholder="https://lorempixel.com/300/150/"/>
                            </div>
                            <div className="row form-group">
                                <input type="text"
                                       className="form-control"
                                       id="widget-name4"
                                       placeholder="Widget Name"/>
                            </div>
                            <div className="row">
                                <h4>Preview</h4>
                            </div>
                            <div className="row">
                                <img src="preview-image.jpg" alt="Smiley face"/>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row justify-content-end">
                                <button className="btn btn-danger"
                                        type="submit"
                                        id="add-widget">
                                    <i className="fas fa-plus-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}