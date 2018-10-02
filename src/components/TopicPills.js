import React from 'react'

const TopicPills = () =>
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
                    Add
                </a>
            </li>
        </ul>
    </div>

export default TopicPills